"use client";
import axios from "axios";
import scss from "./ActorDetail.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api_key } from "../../../../pages/api/api";
import { useState } from "react";
import ActorMovie from "./ActorMovie/ActorMovie";

const ActorDetail = () => {
  const { actorid } = useParams();
  const [ac, setActor] = useState({});

  async function getActorDetails(key) {
    let actorDetail = await axios(`
        https://api.themoviedb.org/3/person/${actorid}?api_key=${key}&language=en-US
        `);
    let { data } = actorDetail;
    console.log(data);
    setActor(data);
  }

  useEffect(() => {
    getActorDetails(api_key);
  }, []);

  return (
    <section className={scss.ActorDetail}>
      <div className="container">
        <div className={scss.content}>
          <img
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${ac.profile_path}`}
            alt=""
          />
          <div className={scss.text}>
            <h2>{ac.name}</h2>
            <div className={scss.desc}>
              <h3>Биография</h3>
              <p>{ac.biography}</p>
            </div>
            <div className={scss.actorMovie}>
              <ActorMovie id={ac.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorDetail;
