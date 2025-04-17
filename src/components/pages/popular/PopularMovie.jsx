"use client";
import axios from "axios";
import scss from "./PopularMovie.module.scss";
import { useEffect } from "react";
import { api_key } from "../api/api";
import { useState } from "react";
import Card from "../../ui/MovieCard/Card";
import { SiThemoviedatabase } from "react-icons/si";
import { useContext } from "react";
import { MovieContext } from "../../context";
import { GoDotFill } from "react-icons/go";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const PopularMovie = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const { language } = useContext(MovieContext);
  const [page, setPage] = useState(1);

  async function getPopular(key) {
    let popular = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`
    );
    let { results } = popular.data;
    setData(results);
    console.log(results);
  }

  useEffect(() => {
    getPopular(api_key);
  }, [language, page]);

  setTimeout(() => {
    setLoad(true);
  }, 1000);

  return (
    <section className={scss.PopularMovie}>
      <div className="container">
        {load ? (
          <div className={scss.content}>
            <h2>
              <SiThemoviedatabase />
              <span>{language === "ru-RU" ? "Популярное" : "Popular"}</span>
            </h2>
            <div className={scss.blocks}>
              {data.map((el) => (
                <Card el={el} />
              ))}
            </div>
            <div className={scss.pogination}>
              <h1
                onClick={() => {
                  setPage(page > 1 ? page - 1 : 1);
                }}
              >
                {<MdOutlineKeyboardDoubleArrowLeft />}
              </h1>
              <div className={scss.number}>
                <a className={scss.three}>
                  <GoDotFill />
                </a>
                <a className={scss.two}>
                  <GoDotFill />
                </a>
                <a className={scss.one}>
                  <GoDotFill />
                </a>
                <h3>{page}</h3>
                <a className={scss.one}>
                  <GoDotFill />
                </a>
                <a className={scss.two}>
                  <GoDotFill />
                </a>
                <a className={scss.three}>
                  <GoDotFill />
                </a>
              </div>
              <h1
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                {<MdOutlineKeyboardDoubleArrowRight />}
              </h1>
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

export default PopularMovie;
