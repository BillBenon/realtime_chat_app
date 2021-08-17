import React, { useEffect, useState } from "react";

import axios from "axios";

import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://pbs.twimg.com/profile_images/1289147062471229441/fwvKRZFJ_400x400.jpg"
        alt=""
      />
      <span className="conversationName">{user.username}</span>
    </div>
  );
}
