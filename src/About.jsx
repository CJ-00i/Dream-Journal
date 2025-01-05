import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import maincloud1 from "../Clouds/Clouds 5/1.png";
import maincloud2 from "../Clouds/Clouds 5/2.png";
import maincloud3 from "../Clouds/Clouds 5/3.png";
import maincloud4 from "../Clouds/Clouds 5/4.png";
import maincloud5 from "../Clouds/Clouds 5/5.png";

function About() {
    const [isChecked, setIsChecked] = useState(false); // Add state for the checkbox

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle the checkbox state
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
                    <label className="logo">Archives</label>
                    <ul>
                        <li><Link to="/">Journal</Link></li>
                        <li className="active"><Link to="/archives">ARCHIVES</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <div className="content-about">
                    <h1 className="title-about">About This Project</h1>
                    <p className="description">
                        This project is a dream journal application that allows users to
                        log and categorize their dreams. It provides features such as text
                        input, date picking, and a word cloud generator for categorization.
                    </p>
                </div>
            </div>

            <footer className="footer">
                <h3 className="footerTitle">Third-Party and Licenses</h3>
                <ul className="footerList">
                    <li className="footerItem">
                        <a href="https://opensource.org/licenses/MIT" className="link">
                            MIT License (for this project)
                        </a>
                    </li>
                    <li className="footerItem">
                        <a href="https://www.fontawesome.com/license/free" className="link">
                            Font Awesome Free License
                        </a> - Used for icons in the project.
                    </li>
                    <li className="footerItem">
                        <a href="https://reactjs.org/docs/license.html" className="link">
                            React License
                        </a> - Used for building the user interface.
                    </li>
                    <li className="footerItem">
                        <a href="https://craftpix.net/file-licenses/" className="link">
                            Cloud Background License
                        </a> - Clouds from Craftpix.
                    </li>
                    <li className="footerItem">
                        <a href="https://craftpix.net/file-licenses/" className="link">
                            Pixel Art License for Glacial Mountains
                        </a> - Pixel Art by Vicente Nitti (@vnitti).
                    </li>
                    <li className="footerItem">
                        <a href="https://github.com/jasondavies/d3-cloud" className="link">
                            Word Cloud Regeneration License
                        </a> - By Jason Davies.
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default About;
