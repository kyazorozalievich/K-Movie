import { MovieContext } from ".";
import React, { useEffect, useState } from "react";

const RootContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("ru-RU");
  const [page, setPage] = useState(1);
  const [favorite, setFavorite] = useState([]);

  function getAll() {
    let result = JSON.parse(localStorage.getItem("movie")) || [];
    setFavorite(result);
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        dark,
        setDark,
        language,
        setLanguage,
        page,
        setPage,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
