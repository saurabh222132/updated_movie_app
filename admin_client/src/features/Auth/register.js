import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { baseUrl } from "../../app/const";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchPassword = watch("password", "");
  const onSubmitForm = async (data) => {
    data.confirmPassword = undefined;

    const response = await fetch(baseUrl + "/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
      credentials: "include",
    });

    const res = await response.json();

    console.log(data, "Response", res);
  };
  return (
    <div className=" px-2">
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Register to CineMate
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Register with e-mail
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className="mx-auto max-w-xs">
                    <input
                      className=" mb-5 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Name"
                      {...register("name", {
                        required: true,
                      })}
                    />

                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                          message:
                            "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === watchPassword || "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Register</span>
                    </button>
                    <Link to="/login">
                      {" "}
                      <div className="mt-6 text-ls   text-center">
                        Or
                        <span className="border-b text-blue-600 border-blue-700 border-dotted">
                          Login{" "}
                        </span>
                      </div>
                    </Link>

                    <p className="mt-6 text-xs text-gray-600 text-center">
                      I agree to abide by chatme&apos;s
                      <Link
                        to="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Terms of Service
                      </Link>
                      and its
                      <Link
                        to="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
