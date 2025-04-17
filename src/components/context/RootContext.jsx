import { MovieContext } from ".";
import React, { useEffect, useState } from "react";

const RootContext = ({ children }) => {
  const [language, setLanguage] = useState("ru-RU");
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(storedFavorites);
  }, []);

  return (
    <MovieContext.Provider
      value={{
        language,
        setLanguage,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
