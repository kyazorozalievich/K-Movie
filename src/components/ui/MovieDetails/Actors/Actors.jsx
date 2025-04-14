import axios from "axios";
import scss from "./Actors.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import noneUser from "../../../../assets/img/noneUser.jpg";
import { useNavigate } from "react-router-dom";

const Actors = ({ actorId, apiKey }) => {
  const [actorsData, setActorsData] = useState([]);
  const nav = useNavigate();

  async function getActors(key) {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${actorId}/credits?api_key=${key}&language=ru-RU`
    );
    setActorsData(data.cast);
    console.log(data.cast, "actors");
  }

  useEffect(() => {
    getActors(apiKey);
  }, [actorId, apiKey]);

  return (
    <section className={scss.Actors}>
      <div className="container">
        <div className={scss.content}>
          <h2>В Главных Ролях</h2>
          <div className={scss.actorCards}>
            {actorsData.map((el, idx) => (
              <div
                className={scss.card}
                key={idx}
                onClick={() => {
                  nav(`/actorDetails/${el.id}`);
                }}
              >
                <img
                  src={
                    el.profile_path
                      ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`
                      : noneUser
                  }
                  alt=""
                />
                <h3>
                  {el.name.length > 15 ? el.name.slice(0, 15) + "..." : el.name}
                </h3>
                <h5>
                  {el.character.length > 20
                    ? el.character.slice(0, 20) + "..."
                    : el.character}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actors;
