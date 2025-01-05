import React, { useState } from "react";
import cloud1 from "./assets/cloud1.png";
import cloud2 from "./assets/cloud2.png";
import cloud3 from "./assets/cloud3.png";
import cloudBg from "./assets/bgCloud.png";
import cloud from "./assets/lonelyCloud.png";
import glacier from "./assets/mountains.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Journal from "./journal";
import { Link } from "react-router-dom";

function TheWordCloud() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); 
    };

    return (
    <>
        <header>
        <nav className="top">
            <input
                type="checkbox"
                id="check"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="check" className="checkbtn">
                <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
            </label>
            <label className="logo">Word-Cloud</label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/archives">ARCHIVES</Link></li>
                <li className="active"><Link to="/wordCloud">WORD-CLOUD</Link></li>
                <li><Link to="/about">SETTINGS</Link></li>
            </ul>
        </nav>
        </header>

        {/* Toggle className based on checkbox */}
        <section className={isChecked ? "background-image blur" : "background-image"}>
            <section className="home">
                <Parallax pages={2} style={{ top: 0, left: 0 }}>
                {/* Lonely Cloud */}
                <ParallaxLayer offset={0} speed={-1}>
                    <img className="layer" src={cloud} alt="Lonely Cloud" />
                </ParallaxLayer>

                {/* Background Layer */}
                <ParallaxLayer offset={0} speed={-0.8}>
                    <img className="layer" src={cloudBg} alt="Cloud Background" />
                </ParallaxLayer>

                {/* Glacier */}
                <ParallaxLayer offset={0} speed={-0.6}>
                    <img className="layer" src={glacier} alt="Glacier Mountains" />
                </ParallaxLayer>

                {/* Title Layer */}
                <ParallaxLayer offset={0} speed={-1.2}>
                    <h1 className="title">DREAM JOURNAL</h1>
                </ParallaxLayer>

                {/* Cloud Layers */}
                <ParallaxLayer offset={0} speed={-0.4}>
                    <img className="layer" src={cloud3} alt="Cloud Layer 3" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.2}>
                    <img className="layer" src={cloud2} alt="Cloud Layer 2" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0}>
                    <img className="layer" src={cloud1} alt="Cloud Layer 1" />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0}>
                    <section className="main">
                        <Journal/>
                    </section>
                </ParallaxLayer>
                </Parallax>
            </section>
        </section>
    </>
  );
}

export default TheWordCloud;
