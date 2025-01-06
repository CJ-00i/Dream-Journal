import React, { useState } from "react";
import { Link } from "react-router-dom"; 


function About() {
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
                    <label className="logo">About</label>
                    <ul>
                        <li><Link to="/Dream-Journal">Journal</Link></li>
                        <li><Link to="/Dream-Journal/archives">ARCHIVES</Link></li>
                        <li className="active"><Link to="#">About</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <div className="content-about">
                    <h1 className="title-about">About This Project</h1>
                    <p className="description">
                        A digital diary for user to log and visualize their dreams with categories and word cloud. 
                        <br />
                        <br />
                        Project Submitted by:
                        <br />
                        <ul>
                            <li>Marinduque</li>
                            <li>Mata</li>
                            <li>Malabago</li>
                            <li>Sanchez</li>
                            <li>Sangilan</li>
                        </ul>
                        <br />
                        Project Submitted to: Maelyn Joy Sabanal
                    </p>
                </div>
            </div>

            <footer className="footer">
                <h3 className="footerTitle">Third-Party and Licenses</h3>
                <ul className="footerList">
                    <li className="footerItem">
                        <a href="https://opensource.org/licenses/MIT" className="link">
                            MIT License
                        </a> - nlp-compromise
                    </li>
                    <li className="footerItem">
                        <a href="https://craftpix.net/file-licenses/" className="link">
                            Cloud Background License
                        </a> - Clouds from Craftpix.
                    </li>
                    <li className="footerItem">
                        <a className="link">
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
