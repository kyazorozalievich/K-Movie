"use client";
import axios from "axios";
import scss from "./ActorDetail.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api_key } from "../../../../pages/api/api";
import { useState } from "react";
import ActorMovie from "./ActorMovie/ActorMovie";
import noneActor from "../../../../../assets/img/noneUser.jpg";
import { useContext } from "react";
import { MovieContext } from "../../../../context";
import { FaStar } from "react-icons/fa";

const ActorDetail = () => {
  const { actorid } = useParams();
  const [ac, setActor] = useState({});
  const [countDesc, setCountDesc] = useState(400);
  const { language } = useContext(MovieContext);

  async function getActorDetails(key) {
    let actorDetail = await axios(`
        https://api.themoviedb.org/3/person/${actorid}?api_key=${key}&language=${language}
        `);
    let { data } = actorDetail;
    console.log(data, "actorData");
    setActor(data);
  }

  useEffect(() => {
    getActorDetails(api_key);
  }, [language]);

  return (
    <section className={scss.ActorDetail}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainInfo}>
            {ac.profile_path ? (
              <img
                src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${ac.profile_path}`}
                alt=""
                className={scss.mainImg}
              />
            ) : (
              <img src={noneActor} alt="" className={scss.mainImg} />
            )}
            <div className={scss.text}>
              <h2>{ac.name}</h2>
              <div className={scss.desc}>
                <h3>{language === "ru-RU" ? "Биография" : "Biography"}</h3>
                <p>
                  {ac.biography ? (
                    ac.biography?.length > 400 ? (
                      ac.biography?.slice(0, countDesc)
                    ) : (
                      ac.biography
                    )
                  ) : (
                    <i>
                      {language === "ru-RU"
                        ? "Данные отсутвуют"
                        : "No data available"}
                    </i>
                  )}
                  {ac.biography ? (
                    ac.biography?.length <= countDesc ? (
                      <span onClick={() => setCountDesc(400)}>
                        {language === "ru-RU" ? "...Закрыть" : "...Close"}
                      </span>
                    ) : (
                      <span onClick={() => setCountDesc(ac.biography?.length)}>
                        {language === "ru-RU"
                          ? "Читать еще..."
                          : "Read more..."}
                      </span>
                    )
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className={scss.actorMovie}>
                <h3>{language === "ru-RU" ? "Известность за" : "Fame for"}</h3>
                <ActorMovie id={actorid} />
              </div>
            </div>
          </div>
          <h2>
            {language === "ru-RU"
              ? "Персональная информация"
              : "Personal information"}
          </h2>
          <div className={scss.actorInfo}>
            <div className={scss.text}>
              <h3>{language === "ru-RU" ? "Имя" : "Name"}</h3>
              <h4>{ac.name}</h4>
            </div>
            <div className={scss.text}>
              <h3>{language === "ru-RU" ? "Известность за" : "Fame for"}</h3>
              <h4>
                {ac.known_for_department ? (
                  ac.known_for_department
                ) : (
                  <i>{language === "ru-RU" ? "Не найдено" : "Not Found"}</i>
                )}
              </h4>
            </div>
            <div className={scss.text}>
              <h3>
                {language === "ru-RU" ? "Дата рождения" : "Date of birth"}
              </h3>
              <h4>
                {ac.birthday ? (
                  ac.birthday
                ) : (
                  <i>{language === "ru-RU" ? "Не найдено" : "Not Found"}</i>
                )}
              </h4>
            </div>
            <div className={scss.text}>
              <h3>
                {language === "ru-RU" ? "Место рождения" : "Place of birth"}
              </h3>
              <h4>
                {ac.place_of_birth ? (
                  ac.place_of_birth
                ) : (
                  <i>{language === "ru-RU" ? "Не найдено" : "Not Found"}</i>
                )}
              </h4>
            </div>
            <div className={scss.text}>
              <h3>
                {language === "ru-RU"
                  ? "Также известность как"
                  : "Also known as"}
              </h3>
              <h4>
                {ac.also_known_as ? (
                  ac.also_known_as[0]
                ) : (
                  <i>{language === "ru-RU" ? "Не найдено" : "Not Found"}</i>
                )}
              </h4>
            </div>
            <div className={scss.text}>
              <h3>{language === "ru-RU" ? "Рейтинг" : "Rating"}</h3>
              <h4>
                <span>{ac.popularity && <FaStar />}</span>
                {ac.popularity ? (
                  Math.round(ac.popularity)
                ) : (
                  <i>{language === "ru-RU" ? "Не найдено" : "Not Found"}</i>
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorDetail;
