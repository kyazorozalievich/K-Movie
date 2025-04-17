"use client";
import { HiCalendarDateRange } from "react-icons/hi2";
import scss from "./Card.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Card = ({ el }) => {
  const nav = useNavigate();

  const getColor = (percentage) => {
    if (percentage >= 70) return "#21d07a";
    if (percentage >= 40) return "#d2d531";
    return "#db2360";
  };

  return (
    <div className={scss.Card} onClick={() => nav(`/moviedetails/${el.id}`)}>
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
      />
      <div className={scss.text}>
        <h3>
          {el.title.length > 15 ? el.title.slice(0, 15) + "..." : el.title}
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
  );
};

export default Card;
