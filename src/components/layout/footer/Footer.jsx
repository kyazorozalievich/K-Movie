"use client";
import scss from "./Footer.module.scss";
import { useContext } from "react";
import { MovieContext } from "../../context";
import logo from "../../../assets/img/logo.png";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { language } = useContext(MovieContext);
  const navigate = useNavigate();
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <img src={logo} alt="" />
            <h6>
              {language === "ru-RU"
                ? "Ваше лучшее место для знакомства с кино и его изучения."
                : "Your premier destination for film discovery and exploration."}
            </h6>
          </div>
          <div className={scss.page}>
            <h3>{language === "ru-RU" ? "Быстрые ссылки" : "Quick Links"}</h3>
            <h4 onClick={() => navigate("/")}>
              {language === "ru-RU" ? "Главная" : "Main"}
            </h4>
            <h4 onClick={() => navigate("/popular")}>
              {language === "ru-RU" ? "Популярное" : "Popular"}
            </h4>
            <h4 onClick={() => navigate("/toprated")}>
              {language === "ru-RU" ? "Топ в рейтинге" : "Top Rated"}
            </h4>
            <h4 onClick={() => navigate("/")}>
              {language === "ru-RU" ? "Избранное" : "Favorite"}
            </h4>
          </div>
          <div className={scss.page}>
            <h3>{language === "ru-RU" ? "О Нас" : "About"}</h3>
            <h6>
              {language === "ru-RU"
                ? "Этот проект использует API TMDB, но не одобрен и не сертифицирован TMDB."
                : "This project uses TMDB API but is not endorsed or certified by TMDB."}
            </h6>
            <div className={scss.target}>
              <a href="#" target="_blank">
                <IoLogoWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/k_orozalievich"
                target="_blank"
              >
                <RiInstagramFill />
              </a>
              <a href="https://t.me/orozal1evich" target="_blank">
                <FaTelegram />
              </a>
              <a
                href="https://www.linkedin.com/in/kyaz-orozalievich-916049331"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
