"use client";
import axios from "axios";
import scss from "./Trailer.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../../../context";
import noneVideo from "../../../../assets/img/noneVideo.png";
const Trailer = ({ trailerId, apiKey }) => {
  const [trailersData, setTrailersData] = useState([]);
  const [next, setNext] = useState(3);
  const { language } = useContext(MovieContext);

  async function getTrailers(key) {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${trailerId}/videos?api_key=${key}&language=${language}`
    );
    setTrailersData(data.results);
    console.log(data.results, "trailers");
  }

  useEffect(() => {
    getTrailers(apiKey);
  }, [trailerId, apiKey, language]);

  return (
    <section className={scss.Trailer}>
      <div className="container">
        {trailersData ? (
          <div className={scss.content}>
            <h2>
              {language === "ru-RU"
                ? "Официальные Трейлеры"
                : "Official Trailers"}
            </h2>
            <div className={scss.trailerVideos}>
              {trailersData.slice(0, next).map((el) => (
                <iframe
                  src={`https://www.youtube.com/embed/${el.key}`}
                  frameborder="0"
                ></iframe>
              ))}
            </div>
            {trailersData.length < 3 ? null : trailersData.length <= next ? (
              <button
                onClick={() => {
                  setNext(3);
                  getTrailers();
                }}
              >
                {language === "ru-RU" ? "Закрыть" : "Close"}
              </button>
            ) : (
              <button
                onClick={() => {
                  setNext(next + 3);
                  getTrailers();
                }}
              >
                {language === "ru-RU" ? "Смотреть Еще..." : "See more..."}
              </button>
            )}
          </div>
        ) : (
          <img src={noneVideo} alt="" />
        )}
      </div>
    </section>
  );
};

export default Trailer;
