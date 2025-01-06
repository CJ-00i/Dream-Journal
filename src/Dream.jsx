import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Journal from "./Journal";
import { Link, useParams } from "react-router-dom"; // using useParams to fetch the dynamic URL param
import cloud1 from "./assets/cloud1.png";
import maincloud1 from "../Clouds/Clouds 5/1.png";
import maincloud2 from "../Clouds/Clouds 5/2.png";
import maincloud3 from "../Clouds/Clouds 5/3.png";
import maincloud4 from "../Clouds/Clouds 5/4.png";
import maincloud5 from "../Clouds/Clouds 5/5.png";

// Importing all the cloud images for multiple backgrounds
import cloud101_1 from "../Clouds/Clouds 1/1.png";
import cloud102_1 from "../Clouds/Clouds 1/2.png";
import cloud103_1 from "../Clouds/Clouds 1/3.png";
import cloud104_1 from "../Clouds/Clouds 1/4.png";

import cloud101_2 from "../Clouds/Clouds 2/1.png";
import cloud102_2 from "../Clouds/Clouds 2/2.png";
import cloud103_2 from "../Clouds/Clouds 2/3.png";
import cloud104_2 from "../Clouds/Clouds 2/4.png";

import cloud101_3 from "../Clouds/Clouds 3/1.png";
import cloud102_3 from "../Clouds/Clouds 3/2.png";
import cloud103_3 from "../Clouds/Clouds 3/3.png";
import cloud104_3 from "../Clouds/Clouds 3/4.png";

import cloud101_4 from "../Clouds/Clouds 4/1.png";
import cloud102_4 from "../Clouds/Clouds 4/2.png";
import cloud103_4 from "../Clouds/Clouds 4/3.png";
import cloud104_4 from "../Clouds/Clouds 4/4.png";

import cloud101_6 from "../Clouds/Clouds 6/1.png";
import cloud102_6 from "../Clouds/Clouds 6/2.png";
import cloud103_6 from "../Clouds/Clouds 6/3.png";
import cloud104_6 from "../Clouds/Clouds 6/4.png";

import cloud101_7 from "../Clouds/Clouds 7/1.png";
import cloud102_7 from "../Clouds/Clouds 7/2.png";
import cloud103_7 from "../Clouds/Clouds 7/3.png";
import cloud104_7 from "../Clouds/Clouds 7/4.png";

import cloud101_8 from "../Clouds/Clouds 8/1.png";
import cloud102_8 from "../Clouds/Clouds 8/2.png";
import cloud103_8 from "../Clouds/Clouds 8/3.png";
import cloud104_8 from "../Clouds/Clouds 8/4.png";

function Dream() {
    const { key } = useParams(); // Get the key of the dream from the URL
    const [isChecked, setIsChecked] = useState(false);
    const [background, setBackground] = useState(1);
    const [fetchedData, setFetchedData] = useState(null);
    
    console.log("dreamKeym:", key)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const getCloudImages = (backgroundNumber) => {
        switch (backgroundNumber) {
            case 1:
                return {
                    cloud101: cloud101_1,
                    cloud102: cloud102_1,
                    cloud103: cloud103_1,
                    cloud104: cloud104_1,
                };
            case 2:
                return {
                    cloud101: cloud101_3,
                    cloud102: cloud102_3,
                    cloud103: cloud103_3,
                    cloud104: cloud104_3,
                };
            case 3:
                return {
                    cloud101: cloud101_2,
                    cloud102: cloud102_2,
                    cloud103: cloud103_2,
                    cloud104: cloud104_2,
                };
            case 4:
                return {
                    cloud101: cloud101_4,
                    cloud102: cloud102_4,
                    cloud103: cloud103_4,
                    cloud104: cloud104_4,
                };
            case 5:
                return {
                    cloud101: cloud101_6,
                    cloud102: cloud102_6,
                    cloud103: cloud103_6,
                    cloud104: cloud104_6,
                };
            case 6:
                return {
                    cloud101: cloud101_7,
                    cloud102: cloud102_7,
                    cloud103: cloud103_7,
                    cloud104: cloud104_7,
                };
            case 7:
                return {
                    cloud101: cloud101_8,
                    cloud102: cloud102_8,
                    cloud103: cloud103_8,
                    cloud104: cloud104_8,
                };
            default:
                return {
                    cloud101: cloud101_1,
                    cloud102: cloud102_1,
                    cloud103: cloud103_1,
                    cloud104: cloud104_1,
                };
        }
    };

    const { cloud101, cloud102, cloud103, cloud104 } = getCloudImages(background);

    useEffect(() => {
        if (key) {
            // Fetch the specific dream data using the key
            const data = JSON.parse(localStorage.getItem(key)); // Retrieve data by the key
            if (data) {
                setFetchedData(data); // Set the fetched data in the state

                // Now update the 'data' key in localStorage with this specific dream data
                localStorage.setItem("data", JSON.stringify(data)); // Save the fetched data in 'data'
                console.log("Fetched data:", data); // Log the fetched data
            } else {
                console.warn("No data found for the key:", key);
            }
        }
    }, [key]); // Run this effect whenever the key changes

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
                    <label className="logo">Journal</label>
                    <ul>
                        <li className="active"><Link to="/Dream-Journal">Journal</Link></li>
                        <li><Link to="/Dream-Journal/archives">Archives</Link></li>
                        <li><Link to="/Dream-Journal/about">ABOUT</Link></li>
                    </ul>
                </nav>
            </header>

            <section className={isChecked ? "background-image blur" : "background-image"}>
                <section className="home">
                    <Parallax pages={3} style={{ top: 0, left: 0 }}>
                        <img src={cloud101} alt="clouds" className="fixed-size-image" />
                        <ParallaxLayer>
                            <img src={cloud101} alt="clouds" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={-0.6}>
                            <img src={cloud102} alt="clouds" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={-0.4}>
                            <img src={cloud103} alt="clouds" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={-0.2}>
                            <img src={cloud104} alt="clouds" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0}>
                            <img className="layer" src={cloud1} alt="Cloud Layer 1" />
                        </ParallaxLayer>

                        <ParallaxLayer offset={0} speed={0}>
                            <section className="main">
                                <Journal
                                    background={background}
                                    setBackground={setBackground}
                                    dreamData={fetchedData} // Pass the fetched data to Journal
                                />
                            </section>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1} speed={0}>
                            <div className="divide"></div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={2} speed={0}>
                            <img src={maincloud1} alt="cloud 1" className="fixed-size-image" />
                        </ParallaxLayer>
                        {/* Other Parallax layers */}
                        <ParallaxLayer offset={2} speed={0}>
                            <img src={maincloud1} alt="cloud 1" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={2} speed={0.4}>
                            <img src={maincloud2} alt="clouds 2" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={2} speed={0.6}>
                            <img src={maincloud3} alt="clouds 3" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={2} speed={0.8}>
                            <img src={maincloud4} alt="clouds 4" className="fixed-size-image" />
                        </ParallaxLayer>
                        <ParallaxLayer offset={2} speed={1}>
                            <img src={maincloud5} alt="clouds 5" className="fixed-size-image" />
                        </ParallaxLayer>
                    </Parallax>
                </section>
            </section>
        </>
    );
}

export default Dream;
