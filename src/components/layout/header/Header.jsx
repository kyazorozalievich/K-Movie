"use client";
import { Link, NavLink, useLocation } from "react-router-dom";
import scss from "./Header.module.scss";
import { BsBox2HeartFill } from "react-icons/bs";
import { IoBookmarks, IoSearch } from "react-icons/io5";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.header__left}>
            <h1>Logo</h1>
            <NavLink
              to="/"
              className={location.pathname === "/" ? scss.active : scss.link}
            >
              Главная
            </NavLink>
            <NavLink
              to="/popular"
              className={
                location.pathname === "/popular" ? scss.active : scss.link
              }
            >
              Популярное
            </NavLink>
            <NavLink
              to="/toprated"
              className={
                location.pathname === "/toprated" ? scss.active : scss.link
              }
            >
              Топ в Рейтинге
            </NavLink>
          </div>
          <div className={scss.header__right}>
            <div
              className={scss.language}
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <a>
                Языки <FaAngleDown />
              </a>
              {langOpen && (
                <div
                  className={scss.langBlock}
                  onMouseEnter={() => setLangOpen(true)}
                  onMouseLeave={() => setLangOpen(false)}
                >
                  <span>Русский</span>
                  <span>Английский</span>
                </div>
              )}
            </div>
            <button>
              <IoSearch />
              Искать
              <FaAngleRight />
            </button>
            <Link to="/">
              <BsBox2HeartFill />
            </Link>
            <Link to="/">
              <IoBookmarks />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
