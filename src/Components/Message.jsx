import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://img.freepik.com/free-photo/ai-generated-cute-girl-pic_23-2150649950.jpg"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
