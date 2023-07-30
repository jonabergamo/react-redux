"use client";
import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function LogIn() {
  const [username, setusername] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
  const onClickLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="flex flex-col justify-start p-24 bg-gray-900 bg-opacity-50 border-red-700 border">
      <input
        className="p-2 text-xl rouded-xl text-black"
        type="text"
        onChange={(e) => setusername(e.target.value)}
      />
      <br />
      <button
        className="p-2 bg-red-500 rounded-md hover:scale-105 transition-all"
        onClick={onClickLogIn}
      >
        Log In
      </button>
      <br />
      <button
        className="p-2 bg-red-500 rounded-md hover:scale-105 transition-all"
        onClick={onClickLogOut}
      >
        Log Out
      </button>
      <br />
      {isAuth && (
        <button
          className="p-2 bg-red-500 rounded-md hover:scale-105 transition-all"
          onClick={onClickToggle}
        >
          Toggle Moderator Status
        </button>
      )}
    </div>
  );
}
