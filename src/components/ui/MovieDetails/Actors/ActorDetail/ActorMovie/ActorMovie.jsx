"use client";
import axios from "axios";
import scss from "./ActorMovie.module.scss";
import { useEffect } from "react";
import { api_key } from "../../../../../pages/api/api";

const ActorMovie = ({ id }) => {
  async function getActorMovie(key) {
    const actorMovie = await axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
    );
    console.log(actorMovie, 'actor');
  }

  useEffect(() => {
    getActorMovie(api_key);
  }, []);

  return (
    <section className={scss.ActorMovie}>
      <div className="container">
        <div className={scss.content}>ActorMovie</div>
      </div>
    </section>
  );
};

export default ActorMovie;
