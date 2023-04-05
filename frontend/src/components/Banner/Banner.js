import React from "react";
import "./Banner.css";
import AwesomeSlider from 'react-awesome-slider';
import slider_1 from "./slider_1.webp"
import 'react-awesome-slider/dist/styles.css';
const Banner = ()=>{

    return (<div>
        <AwesomeSlider
  >
    <div data-src={slider_1} />
    <div data-src={slider_1} />
   
  </AwesomeSlider>
    </div>)
}
export default Banner;