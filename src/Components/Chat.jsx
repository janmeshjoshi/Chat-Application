import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

export const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1250/1250981.png?track=ais"
          alt=""
        />
      </div>
      <Messages />

      <Input />
    </div>
  );
};
