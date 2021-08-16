import React from "react";

import "./conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://pbs.twimg.com/profile_images/1289147062471229441/fwvKRZFJ_400x400.jpg"
        alt=""
      />
      <span className="conversationName">Bill Benon</span>
    </div>
  );
}
