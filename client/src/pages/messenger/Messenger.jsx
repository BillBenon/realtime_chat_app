import React from "react";

import Topbar from "../../components/topbar/Topbar";
import "./messenger.css";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu"></div>
        <div className="chatBox"></div>
        <div className="chatOnline"></div>
      </div>
    </>
  );
}
