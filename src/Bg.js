import React from "react";
import "./App.css";
import VideoBg from "reactjs-videobg";
import poster from "./posterMonolith.jpg";
import mp4 from "./video/bgvideo.mp4";


export default function Bg() {
    return (
        <div>
            <VideoBg poster={poster}>
                <VideoBg.Source src={mp4} type="video/mp4"
                                className="background-video"
                />
            </VideoBg>;
        </div>
    );
}