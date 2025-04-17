"use client";
import { useState } from "react";
import scss from "./Search.module.scss";
import { useEffect } from "react";
import { api_key } from "../api/api";
import axios from "axios";
import Card from "../../ui/MovieCard/Card";
import { useContext } from "react";
import { MovieContext } from "../../context";
import { SiThemoviedatabase } from "react-icons/si";

const Search = () => {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [recomendetData, setRecomendetData] = useState([]);
  const [load, setLoad] = useState(false);
  const { language } = useContext(MovieContext);

  async function getSearchMovie(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
    );
    let { results } = res.data;
    setMovieData(results);
    console.log(results);
  }

  async function getPopular(key) {
    let popular = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=1`
    );
    let { results } = popular.data;
    setRecomendetData(results);
    console.log(results);
  }

  useEffect(() => {
    getSearchMovie(api_key);
    getPopular(api_key);
  }, [movieName, language]);

  setTimeout(() => {
    setLoad(true);
  }, 1000);

  return (
    <section className={scss.Search}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.input}>
            <input
              type="text"
              placeholder={
                language === "ru-RU"
                  ? "Поиск по названию фильма..."
                  : "Search movie name..."
              }
              onChange={(e) => setMovieName(e.target.value)}
              value={movieName}
            />
            <button>{language === "ru-RU" ? "Искать" : "Search"}</button>
          </div>
          {!movieName && (
            <h2>
              <SiThemoviedatabase />
              <span>{language === "ru-RU" ? "Рекомендуемые" : "Featured"}</span>
            </h2>
          )}
          {load ? (
            <div className={scss.movies}>
              {movieName
                ? movieData?.map((el) => <Card el={el} />)
                : recomendetData.map((el) => <Card el={el} />)}
            </div>
          ) : (
            <div className={scss.loading}>
              <center>
                <span className={scss.loader}></span>
              </center>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
