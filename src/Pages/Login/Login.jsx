import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Components/Auth/AuthProvider";

export const Login = () => {
  const { loginData, setLoginData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = async (data) => {
    const formdata = new URLSearchParams();
    formdata.append("username", data.username);
    formdata.append("password", data.password);
    const endpoint = `http://localhost:3000/login`;
    try {
      const result = await axios.post(endpoint, formdata);
      handleSessionData(result.data);
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };

  const handleSessionData = (data) => {
    if (data && data.user) {
      sessionStorage.setItem("access_token", JSON.stringify(data));
      setLoginData(data.user); // Set loginData to user object
    }
  };

  const logout = () => {
    sessionStorage.removeItem('access_token');
    setLoginData(null); // Update to null as the user is logged out
  };

  return (
    <div className="max-w-[1200px] mx-auto">   
      <div className="bg-white sm:items-center sm:pt-0">
        <div className="max-w-[1000px] mx-auto">
          <div className=" overflow-hidden">
            {!loginData ? (
              <div className="grid grid-cols-1 md:grid-cols-2 h-screen mt-20">
                <form className="dark:bg-gray-800 sm:rounded-lg" onSubmit={handleSubmit(submitHandler)}>
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-orange">
                    Login
                  </h1>
                  <div className="flex flex-col">
                    <label htmlFor="username">Brugernavn:</label>
                    <input
                      type="text"
                      id="username"
                      {...register("username", { required: true })}
                      placeholder="Brugernavn"
                      autoComplete="username"
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.username && <span>Brugernavn skal udfyldes</span>}
                  </div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      {...register("password", { required: true })}
                      placeholder="Password"
                      autoComplete="current-password"
                      className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.password && <span>Password skal udfyldes</span>}
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-darkGray bg-lightbrown rounded-[3px] p-2 my-2 px-6"
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div className="h-screen">
                <p>Du er logget ind som {`${loginData.firstname} ${loginData.lastname} `}</p>
                <button
                  className="border-2 border-darkGray bg-lightbrown rounded-[3px] p-2 my-2 px-6"
                  onClick={logout}
                >
                  Log ud
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
