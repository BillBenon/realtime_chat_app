import React from "react";

import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://pbs.twimg.com/profile_images/1289147062471229441/fwvKRZFJ_400x400.jpg"
          alt=""
        />
        <p className="messageText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
