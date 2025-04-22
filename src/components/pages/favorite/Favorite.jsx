"use client";
import { useContext } from "react";
import scss from "./Favorite.module.scss";
import { MovieContext } from "../../context";
import { HiCalendarDateRange } from "react-icons/hi2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { RiHeartsFill } from "react-icons/ri";
import noneFav from "../../../assets/img/noneFav.png";

const Favorite = () => {
  const { favorite, setFavorite, language } = useContext(MovieContext);
  const nav = useNavigate();

  function deleteFav(el) {
    let deleteFavorite = favorite.filter((item) => item.id !== el.id);
    setFavorite(deleteFavorite);
    localStorage.setItem("favorite", JSON.stringify(deleteFavorite));
  }

  const getColor = (percentage) => {
    if (percentage >= 70) return "#21d07a";
    if (percentage >= 40) return "#d2d531";
    return "#db2360";
  };

  return (
    <section className={scss.Favorite}>
      <div className="container">
        <div className={scss.content}>
          <h2>
            <RiHeartsFill />
            <span>
              {" "}
              {language === "ru-RU" ? "Избранные фильмы" : "Favorite Movies"}
            </span>
          </h2>
          <div className={scss.Cards}>
            {favorite.length > 0 ? (
              favorite.map((el, idx) => (
                <div className={scss.Card} key={idx}>
                  <div className={scss.favorite}>
                    <a onClick={() => deleteFav(el)}>
                      <FaHeart
                        style={{
                          color: "red",
                        }}
                      />
                    </a>
                  </div>
                  <div className={scss.rate}>
                    <CircularProgressbar
                      value={Math.round(el.vote_average * 10)}
                      text={`${Math.round(el.vote_average * 10)}%`}
                      styles={buildStyles({
                        textColor: "white",
                        pathColor: getColor(Math.round(el.vote_average * 10)),
                        trailColor: "#204529",
                        textSize: "25px",
                      })}
                    />
                  </div>
                  <img
                    src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`}
                    alt=""
                    onClick={() => nav(`/moviedetails/${el.id}`)}
                  />
                  <div
                    className={scss.text}
                    onClick={() => nav(`/moviedetails/${el.id}`)}
                  >
                    <h3>
                      {el.title.length > 15
                        ? el.title.slice(0, 15) + "..."
                        : el.title}
                    </h3>
                    <h4>
                      <span>
                        <HiCalendarDateRange />
                      </span>
                      {el.release_date.slice(0, 4)}
                    </h4>
                    <p>
                      {el.overview ? (
                        el.overview.length > 45 ? (
                          el.overview.slice(0, 45) + "..."
                        ) : (
                          el.overview
                        )
                      ) : (
                        <i>Данные отсутвуют</i>
                      )}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <center>
                <img src={noneFav} alt="" className={scss.noneImg} />
              </center>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
