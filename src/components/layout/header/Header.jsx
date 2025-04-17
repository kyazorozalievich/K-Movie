"use client";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import { useContext } from "react";
import { MovieContext } from "../../context";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, favorite } = useContext(MovieContext);

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.header__left}>
            <img src={logo} alt="" onClick={() => navigate("/")} />
            <NavLink
              to="/"
              className={location.pathname === "/" ? scss.active : scss.link}
            >
              {language === "ru-RU" ? "Главная" : "Main"}
            </NavLink>
            <NavLink
              to="/popular"
              className={
                location.pathname === "/popular" ? scss.active : scss.link
              }
            >
              {language === "ru-RU" ? "Популярное" : "Popular"}
            </NavLink>
            <NavLink
              to="/toprated"
              className={
                location.pathname === "/toprated" ? scss.active : scss.link
              }
            >
              {language === "ru-RU" ? "Топ в Рейтинге" : "Top Rated"}
            </NavLink>
          </div>
          <div className={scss.header__right}>
            <div
              className={scss.language}
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <a>
                {language === "ru-RU" ? "Языки" : "Language"}
                <FaAngleDown />
              </a>
              {langOpen && (
                <div
                  className={scss.langBlock}
                  onMouseEnter={() => setLangOpen(true)}
                  onMouseLeave={() => setLangOpen(false)}
                >
                  <span
                    onClick={() => {
                      setLanguage("ru-RU"), setLangOpen(false);
                    }}
                  >
                    {language === "ru-RU" ? "Русский" : "Russia"}
                  </span>
                  <span
                    onClick={() => {
                      setLanguage("en-US"), setLangOpen(false);
                    }}
                  >
                    {language === "ru-RU" ? "Английский" : "English"}
                  </span>
                </div>
              )}
            </div>
            <button onClick={() => navigate(`/search`)}>
              {language === "ru-RU" ? "Искать" : "Search"}
              <FaAngleRight />
            </button>
            <Link to="/favorite">
              {favorite.length > 0 && <span>{favorite.length}</span>}
              <BsFillBookmarkHeartFill />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
