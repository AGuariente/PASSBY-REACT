import React from "react";
import "../pages/home.css";
import { Parallax } from "react-parallax";
import Parking from "../assets/images/parking.png";

function Home() {
  return (
    <div className="Home">
      <Parallax strength={600} bgImage={Parking}>
        <div className="content">
          <div className="text-content">PASSBY</div>
        </div>
      </Parallax>
    </div>
  );
}
export default Home;
