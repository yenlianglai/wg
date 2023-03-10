import React, { useEffect, useState } from "react";
import "./Card.scss";
import { useContext } from "react";
import { RwdContext } from "../../../App";

const Card = ({ imgUrl, iconUrl, name, size, rtp, lang }) => {
  const { device } = useContext(RwdContext);
  return (
    <div
      className="card"
      style={device === "desktop" ? {} : { width: "calc(50% - 16px)" }}
    >
      <img src={imgUrl} alt="" />
      <div className="playCircle">
        <img src="/img/playButton.png" alt="" className="play" />
      </div>

      <div className="desc">
        <div className="left">
          <img
            src={iconUrl}
            alt=""
            style={
              device === "desktop" ? {} : { width: "6.5vw", height: "6.5vw" }
            }
          />
        </div>

        <div className="mid">
          <p className="name">{name}</p>
          <p className="size">
            {lang === "eng" ? `SIZE : ${size}MB` : `大小 : ${size}MB`}
          </p>
        </div>

        <div className="right">
          <div className="devices">
            <img src="/img/safari.gif" alt="" />
            <img src="/img/windows.gif" alt="" />
            <img src="/img/android.gif" alt="" />
            <img src="/img/apple.gif" alt="" />
            <img src="/img/html.gif" alt="" />
          </div>

          <p className="rtp">RTP: {rtp}%</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
