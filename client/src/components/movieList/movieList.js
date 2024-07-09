import React, { useEffect, useState } from "react";
import "./movieList.css";
import { json, useParams } from "react-router-dom";
import Cards from "../card/card";
import Footer from "../footer/footer";
import { BaseURL } from "../../constant.js/baseURL";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [isPageEnd, setIsPageEnd] = useState(false);

  let { type } = useParams();
  if (type === undefined) type = "popular";
  console.log("this is the type", type);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    // fetch(
    //   `https://api.themoviedb.org/3/movie/${
    //     type ? type : "popular"
    //   }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    // )

    fetch(BaseURL + `/v1/movielist`, {
      method: "POST",
      body: JSON.stringify({ type: type, currentPage: page }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setMovieList(res.data);
        setIsPageEnd(res.pageEnd);
      });
  };

  return (
    <>
      <div className="movie__list">
        <h2 className="list__title text-blue-600 font-bold text-center">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Cards movie={movie} />
          ))}
        </div>
      </div>
      <div className=" text-center  mb-8 mr-5">
        <button
          className=" bg-blue-500 p-3 rounded-md text-2xl mr-2"
          onClick={() => {
            let newpage = 1;
            if (page > 1) newpage = page - 1;

            return setPage(newpage);
          }}
        >
          Previous
        </button>
        <span className=" mr-2 bg-slate-500 text-2xl p-3 rounded-md">
          {!isPageEnd ? page : "Page End"}
        </span>

        <button
          className=" bg-blue-500 p-3 rounded-md text-2xl"
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MovieList;
