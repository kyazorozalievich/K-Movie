"use client";
import scss from "./MainWelcome.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../../context";
import { useEffect } from "react";
import { api_key } from "../api/api";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const MainWelcome = () => {
  const [data, setData] = useState([]);
  const { language } = useContext(MovieContext);
  const navigate = useNavigate();

  async function getWelcomeMovie(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=2`
    );
    let { results } = res.data;
    setData(results);
    console.log(results.sort((a, b) => b.vote_average - a.vote_average));
  }
  useEffect(() => {
    getWelcomeMovie(api_key);
  }, [language]);

  return (
    <section className={scss.MainWelcome}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className={scss.swiper}
      >
        {data
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 8)
          .map((el) => (
            <SwiperSlide>
              <div
                className={scss.content}
                style={{
                  backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${el.backdrop_path})`,
                }}
              >
                <div className={scss.bg}> 
                  <div className="container">
                    <div className={scss.rating_time}>
                      <h4>
                        <span>
                          <FaStar />
                        </span>
                        {Math.round(el.vote_average * 10)} / 100
                      </h4>
                      -
                      <h3>
                        <span>
                          <MdDateRange />
                        </span>{" "}
                        {el.release_date.slice(0, 4)}
                      </h3>
                    </div>
                    <h2>{el.title}</h2>
                    <p>{el.overview}</p>
                    <button
                      className={scss.button}
                      onClick={() => navigate(`/moviedetails/${el.id}`)}
                    >
                      <TbListDetails />
                      {language === "ru-RU"
                        ? "Посмотреть Подробности"
                        : " Watch Details"}
                    </button>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default MainWelcome;
