import { useSelector } from "react-redux";
import {
  selectLoggedInUser,
  setLoggedInUser,
} from "../features/Auth/authSlice";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "./const";

export const Protected = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const main = async () => {
      const response = await fetch(baseUrl + "/checkauth", {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });

      const res = await response.json();
      if (res.success === true) {
        dispatch(setLoggedInUser(res.user));
      }
    };
    main();
  }, []);

  const loggedInUser = useSelector(selectLoggedInUser);
  console.log(loggedInUser);
  if (loggedInUser !== null) return children;
  else return <Navigate to="/" replace={true} />;
};
