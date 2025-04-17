"use client";
import { useState } from "react";
import scss from "./Data.module.scss";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Data = () => {
  const api_key = "45d1d56fc54beedb6c0207f9ac6cab7c";
  const popular =
    "https://api.themoviedb.org/3/movie/popular?api_key=api&language=en-US&page=1";
  const toprated =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=api&language=en-US&page=1";
  const detail =
    "https://api.themoviedb.org/3/movie/movieId?api_key=api&language=en-US";
  const detailActors =
    "https://api.themoviedb.org/3/person/personId?api_key=key&language=en-US";
  const detailTrailers =
    "https://api.themoviedb.org/3/movie/movieId/videos?api_key=key&language=en-US";
  const actorsMovie =
    "https://api.themoviedb.org/3/person/personId/movie_credits?api_key=key&language=en-US";
  const search =
    "https://api.themoviedb.org/3/search/movie?api_key=key&query=movieName";

  const copyApiKey = async () => {
    await navigator.clipboard.writeText(api_key);
    toast.success("API KEY успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const copyPopular = async () => {
    await navigator.clipboard.writeText(popular);
    toast.success("API Popular успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const copyTopRated = async () => {
    await navigator.clipboard.writeText(toprated);
    toast.success("API Popular успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const copyDetail = async () => {
    await navigator.clipboard.writeText(detail);
    toast.success("API Detail успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const copyDetailActors = async () => {
    await navigator.clipboard.writeText(detailActors);
    toast.success("API Detail Actors успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const copyDetailTrailers = async () => {
    await navigator.clipboard.writeText(detailTrailers);
    toast.success("API Detail Trailers успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const copyActorsMovie = async () => {
    await navigator.clipboard.writeText(actorsMovie);
    toast.success("API Actors Movie успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const copySearch = async () => {
    await navigator.clipboard.writeText(search);
    toast.success("API Search успешно скопирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  
  return (
    <section className={scss.Data}>
      <ToastContainer />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.api}>
            <h2>API KEY</h2>
            <p>{api_key}</p>
            <button onClick={copyApiKey}>Скопировать</button>
          </div>
          <div className={scss.api}>
            <h2>API Popular</h2>
            <p>{popular}</p>
            <button onClick={copyPopular}>Скопировать</button>
          </div>
          <div className={scss.api}>
            <h2>API TopRated</h2>
            <p>{toprated}</p>
            <button onClick={copyTopRated}>Скопировать</button>
          </div>
          <div className={scss.api}>
            <h2>API Detail</h2>
            <p>{detail}</p>
            <button onClick={copyDetail}>Скопировать</button>
          </div>
          <div className={scss.api}>
            <h2>API Detail Actors</h2>
            <p>{detailActors}</p>
            <button onClick={copyDetailActors}>Скопировать</button>
          </div>
          <div className={scss.api}>
            <h2>API Detail Trailers</h2>
            <p>{detailTrailers}</p>
            <button onClick={copyDetailTrailers}>Скопировать</button>
          </div>
          <div className={scss.api}>
            <h2>API Actors Movie</h2>
            <p>{actorsMovie}</p>
            <button onClick={copyActorsMovie}>Скопировать</button>
          </div>
          <div className={scss.api}>
            <h2>API Search</h2>
            <p>{search}</p>
            <button onClick={copySearch}>Скопировать</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Data;
