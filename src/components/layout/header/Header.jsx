"use client";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import { FaAngleDown, FaAngleRight, FaPiedPiperSquare } from "react-icons/fa";
import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import { useContext } from "react";
import { MovieContext } from "../../context";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [adap, setAdap] = useState(false);
  const { language, setLanguage, favorite } = useContext(MovieContext);

  function toData() {
    if (password === "api07") {
      navigate("/data");
      setModalOpen(false);
    } else {
      alert("Error!!!!!");
    }
  }

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
            <a onClick={() => setModalOpen(true)}>
              <FaPiedPiperSquare />
            </a>
          </div>
          <div className={scss.header__adap}>
            <a onClick={() => setAdap(true)}>
              <RiMenu3Fill />
            </a>
            {adap && (
              <div className={scss.block}>
                <NavLink
                  to="/"
                  className={scss.nav}
                  onClick={() => setAdap(false)}
                >
                  {language === "ru-RU" ? "Главная" : "Main"}
                </NavLink>
                <NavLink
                  to="/popular"
                  className={scss.nav}
                  onClick={() => setAdap(false)}
                >
                  {language === "ru-RU" ? "Популярное" : "Popular"}
                </NavLink>
                <NavLink
                  to="/toprated"
                  className={scss.nav}
                  onClick={() => setAdap(false)}
                >
                  {language === "ru-RU" ? "Топ в Рейтинге" : "Top Rated"}
                </NavLink>
                <div className={scss.language}>
                  <a onClick={() => setLangOpen(!langOpen)}>
                    {language === "ru-RU" ? "Языки" : "Language"}
                    <FaAngleDown />
                  </a>
                  {langOpen && (
                    <div className={scss.langBlock}>
                      <span
                        onClick={() => {
                          setLanguage("ru-RU"),
                            setLangOpen(false),
                            setAdap(false);
                        }}
                      >
                        {language === "ru-RU" ? "Русский" : "Russia"}
                      </span>
                      <span
                        onClick={() => {
                          setLanguage("en-US"),
                            setLangOpen(false),
                            setAdap(false);
                        }}
                      >
                        {language === "ru-RU" ? "Английский" : "English"}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => {
                    navigate(`/search`), setAdap(false);
                  }}
                >
                  {language === "ru-RU" ? "Искать" : "Search"}
                  <FaAngleRight />
                </button>
                <Link to="/favorite" onClick={() => setAdap(false)}>
                  {language === "ru-RU" ? "Избранное" : "Favorite"}
                  <FaAngleRight />
                </Link>
                <a onClick={() => setModalOpen(true)}>
                  API
                  <FaAngleRight />
                </a>
                <a onClick={() => setAdap(false)}>
                  {language === "ru-RU" ? "Закрыть" : "Close"}{" "}
                  <MdOutlineClear />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className={scss.dataModalBg}>
          <div className={scss.dataModal}>
            <a onClick={() => setModalOpen(false)}>
              <MdOutlineClear />
            </a>
            <input
              type="text"
              placeholder={
                language === "ru-RU"
                  ? "Введите пароль..."
                  : "Enter your password..."
              }
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" && toData();
              }}
            />
            <button onClick={() => toData()}>
              {language === "ru-RU" ? "Потвердить" : "Confirm"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
