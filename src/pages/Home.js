import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/pexels-valeria-boltneva-1199959.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Image})` }}>
      <div className="headerContainer">
        <h1>Taste Heavens Burgers</h1>
        <p>Burgers to fit any taste</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;