"use client";
import { useNavigate } from "react-router-dom";
import scss from "./MainMovie.module.scss";
import { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../../context";
import axios from "axios";
import { api_key } from "../api/api";
import { useEffect } from "react";
import { RiMovieAiFill, RiMovieAiLine } from "react-icons/ri";
import Card from "../../ui/MovieCard/Card";
import { FiChevronsRight } from "react-icons/fi";

const MainMovie = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setToprated] = useState([]);
  const { language } = useContext(MovieContext);
  const navigate = useNavigate();

  async function getWelcomePopular(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=1`
    );
    let { results } = res.data;
    setPopular(results);
  }

  async function getWelcomeToprated(key) {
    let popular = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=1`
    );
    let { results } = popular.data;
    setToprated(results);
  }

  useEffect(() => {
    getWelcomePopular(api_key);
    getWelcomeToprated(api_key);
  }, [language]);

  return (
    <section className={scss.MainMovie}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.movieContent}>
            <h2>
              <RiMovieAiFill />
              <span>
                {language === "ru-RU" ? "Популярные фильмы" : "Popular Movies"}
              </span>
            </h2>
            <div className={scss.movies}>
              {popular.map((el, idx) => (
                <Card el={el} key={idx} />
              ))}
              <button onClick={() => navigate("/popular")}>
                {language === "ru-RU" ? "Еще" : "More"} <FiChevronsRight />
              </button>
            </div>
          </div>
          <div className={scss.movieContent}>
            <h2>
              <RiMovieAiLine />
              <span> 
                {" "}
                {language === "ru-RU"
                  ? "Фильмы в Топ-Рейтинге"
                  : "Top-Rated Movies"}
              </span>
            </h2>
            <div className={scss.movies}>
              {topRated.map((el, idx) => (
                <Card el={el} key={idx} />
              ))}
              <button onClick={() => navigate("/toprated")}>
                {language === "ru-RU" ? "Еще" : "More"} <FiChevronsRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMovie;
