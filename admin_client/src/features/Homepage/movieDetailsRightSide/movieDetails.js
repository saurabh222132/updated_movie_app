import { useEffect, useState } from "react";
import { EditForm } from "../movieEditForms/editform";

export const Details = ({ movie }) => {
  const [editForm, setEditForm] = useState(false);
  console.log(movie);
  useEffect(() => {
    setEditForm(false);
  }, [movie]);

  return (
    <div>
      {!editForm ? (
        <section class=" rounded-md bg-gray-300 py-6 sm:py-16">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class=" flex">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base font-semibold leading-7 text-indigo-600">
                    Movie Details
                  </h2>
                  <p class="mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">
                    {movie.title}
                  </p>
                  <p class="mt-6 text-xl leading-8 text-gray-600">
                    {movie.overview}
                  </p>
                  <dl class="mt-10 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-lg text-gray-900">
                        Release Date : {"  "}
                      </dt>
                      {movie.release_date}
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-lg text-gray-900">
                        Rating : {"  "}
                      </dt>
                      {movie.vote_average}
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-lg text-gray-900">
                        language : {"  "}
                      </dt>
                      English
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-lg text-gray-900">
                        Production : {"  "}
                      </dt>
                      Universal Picture
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-lg text-gray-900">
                        Genre : {"  "}
                      </dt>
                      Action, Drama, Comedy, Thriller
                    </div>
                  </dl>
                </div>
                <div class="mt-10 pl-9 flex items-center gap-x-6">
                  <button
                    onClick={() => setEditForm(!editForm)}
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Edit Details
                  </button>
                  <button class="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Delete movie
                  </button>
                </div>
              </div>
              <div className="">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie ? movie.poster_path : ""
                  }`}
                  alt="movie  poster"
                  class=" rounded-xl "
                  width="400"
                  height="350"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="">
          <h3 className=" text-center font-semibold text-5xl mt-2">
            Edit Movie Details
          </h3>
          <div className=" mt-5">
            <EditForm movie={movie} setEditForm={setEditForm}></EditForm>
          </div>
        </div>
      )}
    </div>
  );
};
