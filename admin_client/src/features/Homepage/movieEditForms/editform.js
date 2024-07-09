import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const EditForm = ({ movie, setEditForm }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const movieEntries = Object.entries(movie);
  const [moviesEntries, setMoviesEntries] = useState(movieEntries);

  const onSubmitForm = async (data) => {
    console.log(data);
    // const response = await fetch(baseUrl + "/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "content-type": "application/json" },
    //   credentials: "include",
    // });

    // const res = await response.json();

    // dispatch(setLoggedInUser(res.user));
    // console.log("Response", res.user);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className=" px-10">
        {movieEntries.map((item, index) => {
          return (
            <div key={index} className=" mb-3 grid grid-cols-3 flex">
              <label className=""> {item[0]}</label>

              <input
                className=" col-span-2 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                name={item[0]}
                defaultValue={"Default value"}
                // onChange={(e) => (e.target.value)}
                placeholder={`${item[0]}`}
                {...register(`${item[0]}`, {
                  required: true,
                })}
              />
            </div>
          );
        })}
        <div className="flex">
          <button
            type="submit"
            className="mt-5 tracking-wide font-semibold bg-indigo-500 me-3 text-gray-100 w-2/4 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="ml-3 ">Done</span>
          </button>
          <button
            onClick={() => {
              setEditForm(false);
            }}
            className="mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-2/4 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="ml-3 ">Cancel</span>
          </button>
        </div>
      </div>
    </form>
  );
};
