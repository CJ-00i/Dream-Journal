import React, {useState} from "react";
import { Link } from "react-router-dom";
    

function Header() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); 
    };

    return (
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
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/archives">ARCHIVES</Link></li>
                <li><Link to="/wordCloud">WORD-CLOUD</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;
