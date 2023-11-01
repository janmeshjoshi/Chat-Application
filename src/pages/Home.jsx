import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Chat } from "../Components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
      <button className="btn" onClick={() => signOut(auth)}>
        Log out
      </button>
    </div>
  );
};
