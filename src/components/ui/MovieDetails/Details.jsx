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

const Details = () => {
  const { movieid } = useParams();
  const [dtl, setDetail] = useState({});
  async function getMovieDetails(key) {
    let details = await axios(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key}&language=ru-RU`
    );
    let { data } = details;
    setDetail(data);
    console.log(data, "DetailPage");
  }

  useEffect(() => {
    getMovieDetails(api_key);
  }, []);

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
                  <a>
                    <FaRegHeart />
                    {/* <FaHeart /> */}
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
                  <i>{dtl.tagline ? dtl.tagline : "Данные отсутвуют"}</i>
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
                <h3>Обзор</h3>
                <hr />
                <p>
                  {dtl.overview ? (
                    dtl.length > 600 ? (
                      dtl.overview.slice(0, 600) + "..."
                    ) : (
                      dtl.overview
                    )
                  ) : (
                    <i>Данные отсутвуют</i>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Actors actorId={dtl.id} apiKey={api_key} />
      <Trailers trailerId={dtl.id} apiKey={api_key} />
    </>
  );
};

export default Details;
