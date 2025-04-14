import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import MainPage from "./components/pages/main/MainPage";
import PopularMovie from "./components/pages/popular/PopularMovie";
import TopRatedMovie from "./components/pages/toprated/TopRatedMovie";
import { Route, Routes } from "react-router-dom";
import Details from "./components/ui/MovieDetails/Details";
import ActorDetail from "./components/ui/MovieDetails/Actors/ActorDetail/ActorDetail";

function App() {
  const pages = [
    {
      id: 1,
      href: "/",
      page: <MainPage />,
    },
    {
      id: 2,
      href: "/popular",
      page: <PopularMovie />,
    },
    {
      id: 3,
      href: "/toprated",
      page: <TopRatedMovie />,
    },
    {
      id: 4,
      href: "/moviedetails/:movieid",
      page: <Details />,
    },
    {
      id: 5,
      href: "/actorDetails/:actorid",
      page: <ActorDetail />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {pages.map((el) => (
          <Route path={el.href} element={el.page} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
