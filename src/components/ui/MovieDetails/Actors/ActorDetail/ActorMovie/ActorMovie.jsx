"use client";
import axios from "axios";
import scss from "./ActorMovie.module.scss";
import { useEffect } from "react";
import { api_key } from "../../../../../pages/api/api";
import { useState } from "react";
import noneMov from "../../../../../../assets/img/noneMovie.jpg";
import { useNavigate } from "react-router-dom";

const ActorMovie = ({ id }) => {
  const [actorMov, setActorMov] = useState([]);
  const navigate = useNavigate();

  async function getActorMovie(key) {
    const actorMovie = await axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=ru-RU`
    );
    let { data } = actorMovie;
    setActorMov(data.cast);
    console.log(data.cast, "actor-movie");
  }

  useEffect(() => {
    getActorMovie(api_key);
  }, []);

  return (
    <section className={scss.ActorMovie}>
      {actorMov.map((el) => (
        <div className={scss.movie}>
          {el.poster_path ? (
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
              alt=""
              onClick={() => navigate(`/moviedetails/${el.id}`)}
            />
          ) : (
            <img
              src={noneMov}
              alt=""
              onClick={() => navigate(`/moviedetails/${el.id}`)}
            />
          )}
          <h4>{el.title}</h4>
        </div>
      ))}
    </section>
  );
};

export default ActorMovie;
