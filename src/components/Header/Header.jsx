import React from "react";
import myImage from '../../../public/Images/coffee.jpg';
import './Header.css';

function Header() {
    return(
        <div className="hero">
            <img src={myImage} alt="Coffee Image" />
            <h1 className="montserrat-bold">Coffee Connection</h1>
        </div>
    );
};

export default Header;