"use client";
import axios from "axios";
import scss from "./Trailer.module.scss";
import { useEffect } from "react";
import { useState } from "react";

const Trailer = ({ trailerId, apiKey }) => {
  const [trailersData, setTrailersData] = useState([]);
  const [next, setNext] = useState(3);

  async function getTrailers(key) {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${trailerId}/videos?api_key=${key}&language=en-US`
    );
    setTrailersData(data.results);
    console.log(data.results, "trailers");
  }

  useEffect(() => {
    getTrailers(apiKey);
  }, [trailerId, apiKey]);

  return (
    <section className={scss.Trailer}>
      <div className="container">
        <div className={scss.content}>
          <h2>Официальные Трейлеры</h2>
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
              Закрыть
            </button>
          ) : (
            <button
              onClick={() => {
                setNext(next + 3);
                getTrailers();
              }}
            >
              Смотреть Еще...
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Trailer;
