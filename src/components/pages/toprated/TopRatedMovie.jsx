"use client";
import axios from "axios";
import scss from "./TopRatedMovie.module.scss";
import { useEffect } from "react";
import { api_key } from "../api/api";
import { useState } from "react";
import Card from "../../ui/MovieCard/Card";
import { SiThemoviedatabase } from "react-icons/si";

const TopRatedMovie = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  async function getPopular(key) {
    let popular = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ru-RU&page=1`
    );
    let { results } = popular.data;
    setData(results);
    console.log(results);
  }

  useEffect(() => {
    getPopular(api_key);
  }, []);

  setTimeout(() => {
    setLoad(true);
  }, 1000);

  return (
    <section className={scss.TopRatedMovie}>
      <div className="container">
        {load ? (
          <div className={scss.content}>
            <h2>
              <SiThemoviedatabase />
              <span>Top Rated Movies</span>
            </h2>
            <div className={scss.blocks}>
              {data.map((el) => (
                <Card el={el} />
              ))}
            </div>
          </div>
        ) : (
          <div className={scss.loading}>
            <span className={scss.loader}></span>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopRatedMovie;
