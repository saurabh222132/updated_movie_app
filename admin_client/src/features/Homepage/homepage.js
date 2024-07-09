import { useParams } from "react-router-dom";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import { baseUrl as BaseURL } from "../../app/const";
import { useDispatch, useSelector } from "react-redux";
import { selectedMovieType, setMovieList } from "./hompageSlice";
import Cards from "./movieCards/card/card";
import { Details } from "./movieDetailsRightSide/movieDetails";

export const Homepage = () => {
  const [page, setPage] = useState(1);
  const [movieList, setMovieListInState] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});

  const type = useSelector(selectedMovieType);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(BaseURL + `/movielist`, {
      method: "POST",
      body: JSON.stringify({ type: type, currentPage: page }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setMovieListInState(res.data);
        console.log(res.data);
        dispatch(setMovieList({ movieList: res.data }));
      });
  };
  return (
    <div className=" h-lvh  ">
      <Header> </Header>
      <div className="h-full grid grid-cols-6 m-4 rounded-md ">
        <div className="  text-center overflow-y-scroll rounded-md  col-span-2 bg-gray-300 mr-2">
          <h3 className=" text-center font-semibold text-5xl mt-2">
            {type.toUpperCase()}
          </h3>
          <div className=" mt-5">
            {movieList.map((movie, index) => {
              return (
                <button
                  onClick={() => {
                    setMovieDetail(movie);
                  }}
                >
                  <Cards movie={movie}></Cards>{" "}
                </button>
              );
            })}
          </div>
        </div>
        <div className="rounded-md h-full  grid col-span-4 bg-gray-300">
          <div className=" h-full overflow-y-scroll movieDetails ">
            <Details movie={movieDetail}></Details>
          </div>
        </div>
      </div>
    </div>
  );
};
