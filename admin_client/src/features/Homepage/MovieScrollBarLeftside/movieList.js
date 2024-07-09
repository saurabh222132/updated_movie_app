import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const MovieList = () => {
  const type = useParams();
  console.log(type);
  return <h1>Movie List</h1>;
};
