import React, { useState } from "react";
import "./Header.css";
import { Link, Navigate } from "react-router-dom";
import { setSelectedMovieType } from "../hompageSlice";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../app/const";

const Header = () => {
  const dispatch = useDispatch();

  const handleSubmit = (type) => {
    dispatch(setSelectedMovieType(type));
  };
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async () => {
    const response = await fetch(baseUrl + "/logout", {
      method: "GET",
      headers: { "content-type": "application/json" },
      credentials: "include",
    });

    const res = await response.json();
    console.log(res, "user logout rs");
    if (res.success === true) {
      <Navigate to={"/"}> </Navigate>;
    }
  };

  return (
    <>
      {isLoggedOut ? (
        <Navigate to={"/"}> </Navigate>
      ) : (
        <div className="header ">
          <div className="headerLeft">
            <Link to="/" onClick={() => handleSubmit("popular")}>
              <img
                className=" rounded-full header__icon"
                src="https://thumbs.dreamstime.com/b/movie-illustration-logo-vector-design-film-178252125.jpg"
                alt=""
              />
            </Link>
            <Link
              onClick={() => handleSubmit("popular")}
              style={{ textDecoration: "none" }}
            >
              <span>Popular</span>
            </Link>
            <Link
              onClick={() => handleSubmit("top_rated")}
              style={{ textDecoration: "none" }}
            >
              <span>Top Rated</span>
            </Link>
            <Link
              onClick={() => handleSubmit("upcoming")}
              style={{ textDecoration: "none" }}
            >
              <span>Upcoming</span>
            </Link>
            <Link
              onClick={() => handleSubmit("now_playing")}
              style={{ textDecoration: "none" }}
            >
              <span>Now Playing</span>
            </Link>
            <Link
              onClick={() => handleSubmit("now_playing")}
              style={{ textDecoration: "none" }}
              className=" bg-indigo-500 rounded-lg"
            >
              <span>Add New Movie</span>
            </Link>
          </div>
          <div className=" ">
            <Link onClick={() => handleLogout()}>
              <img
                className="  bg-white p-2 rounded-full logout"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6P8kq1orWBk7ouVo6ig4I6ZgxBXAD1vUYig&s"
                alt="name"
              />
            </Link>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default Header;
