"use client";
import axios from "axios";
import scss from "./Details.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api_key } from "../../pages/api/api";
import { useState } from "react";
import { HiCalendarDateRange } from "react-icons/hi2";
import { FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Actors from "./Actors/Actors";
import Trailers from "./Trailers/Trailer";
import { useContext } from "react";
import { MovieContext } from "../../context";

const Details = () => {
  const { movieid } = useParams();
  const [dtl, setDetail] = useState({});
  const { language, favorite, setFavorite } = useContext(MovieContext);

  async function getMovieDetails(key) {
    let details = await axios(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key}&language=${language}`
    );
    let { data } = details;
    setDetail(data);
    console.log(data, "DetailPage");
  }

  const addToFavorite = () => {
    let findFavorite = favorite.find((el) => el.id === dtl.id);
    if (findFavorite) {
      let deleteFavorite = favorite.filter((el) => el.id !== dtl.id);
      setFavorite(deleteFavorite);
      localStorage.setItem("favorite", JSON.stringify(deleteFavorite));
    } else {
      let result = [...favorite, dtl];
      setFavorite(result);
      localStorage.setItem("favorite", JSON.stringify(result));
    }
  };

  let heart = favorite.some((el) => el.id === dtl.id);

  useEffect(() => {
    getMovieDetails(api_key);
  }, [language]);

  return (
    <>
      <section
        className={scss.Details}
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${dtl.backdrop_path})`,
        }}
      >
        <div className={scss.DetailBg}>
          <div className="container">
            <div className={scss.content}>
              <div className={scss.ImageBlock}>
                <div className={scss.favorite}>
                  <a onClick={() => addToFavorite()}>
                    {heart ? (
                      <FaHeart
                        style={{
                          color: "red",
                        }}
                      />
                    ) : (
                      <FaRegHeart />
                    )}
                  </a>
                </div>
                <img
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${dtl.poster_path}`}
                  alt=""
                />
              </div>
              <div className={scss.DetailText}>
                <div className={scss.stick}>
                  <h4 className={scss.yellow}>{dtl.status}</h4>
                  <h4 className={scss.green}>
                    {dtl.release_date?.slice(0, 4)}
                  </h4>
                </div>
                <h2>{dtl.title}</h2>
                <h5>
                  <i>
                    {dtl.tagline
                      ? dtl.tagline
                      : language === "ru-RU"
                      ? "Данные отсутвуют"
                      : "No data available"}
                  </i>
                </h5>
                <div className={scss.blocks}>
                  {dtl.genres?.map((el, idx) => (
                    <span key={idx}>{el.name}</span>
                  ))}
                </div>
                <div className={scss.DataTimeRate}>
                  <h5>
                    <span>
                      <HiCalendarDateRange />
                    </span>
                    {String(dtl.release_date).replaceAll("-", "/")}
                  </h5>
                  <h5>
                    <span>
                      <FaRegClock />
                    </span>
                    {Math.floor(dtl.runtime / 60) + "h"}{" "}
                    {Math.floor(dtl.runtime % 60) + "m"}
                  </h5>
                  <h5>
                    <span>
                      <IoIosStar />
                    </span>
                    {Math.round(dtl.vote_average * 10)} ({dtl.vote_count} votes)
                  </h5>
                </div>
                <h3>{language === "ru-RU" ? "Обзор" : "Review"}</h3>
                <hr />
                <p>
                  {dtl.overview ? (
                    dtl.length > 600 ? (
                      dtl.overview.slice(0, 600) + "..."
                    ) : (
                      dtl.overview
                    )
                  ) : (
                    <i>
                      {language === "ru-RU"
                        ? "Данные отсутвуют"
                        : "No data available"}
                    </i>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className={scss.DetailTextAdap}>
          <div className={scss.stick}>
            <h4 className={scss.yellow}>{dtl.status}</h4>
            <h4 className={scss.green}>{dtl.release_date?.slice(0, 4)}</h4>
            <a onClick={() => addToFavorite()}>
              {heart ? (
                <FaHeart
                  style={{
                    color: "red",
                  }}
                />
              ) : (
                <FaRegHeart />
              )}
            </a>
          </div>
          <h2>{dtl.title}</h2>
          <h5>
            <i>
              {dtl.tagline
                ? dtl.tagline
                : language === "ru-RU"
                ? "Данные отсутвуют"
                : "No data available"}
            </i>
          </h5>
          <div className={scss.blocks}>
            {dtl.genres?.map((el, idx) => (
              <span key={idx}>{el.name}</span>
            ))}
          </div>
          <div className={scss.DataTimeRate}>
            <h5>
              <span>
                <HiCalendarDateRange />
              </span>
              {String(dtl.release_date).replaceAll("-", "/")}
            </h5>
            <h5>
              <span>
                <FaRegClock />
              </span>
              {Math.floor(dtl.runtime / 60) + "h"}{" "}
              {Math.floor(dtl.runtime % 60) + "m"}
            </h5>
            <h5>
              <span>
                <IoIosStar />
              </span>
              {Math.round(dtl.vote_average * 10)} ({dtl.vote_count} votes)
            </h5>
          </div>
          <h3>{language === "ru-RU" ? "Обзор" : "Review"}</h3>
          <hr />
          <p>
            {dtl.overview ? (
              dtl.length > 600 ? (
                dtl.overview.slice(0, 600) + "..."
              ) : (
                dtl.overview
              )
            ) : (
              <i>
                {language === "ru-RU"
                  ? "Данные отсутвуют"
                  : "No data available"}
              </i>
            )}
          </p>
        </div>
      </div>
      <Actors actorId={dtl.id} apiKey={api_key} />
      <Trailers trailerId={dtl.id} apiKey={api_key} />
    </>
  );
};

export default Details;
