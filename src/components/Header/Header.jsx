import React from "react";
import myImage from '../../../public/Images/coffee.jpg'

function Header() {
    return(
        <div>
            <img src={myImage} alt="Coffee Image" />
        </div>
    );
};

export default Header;