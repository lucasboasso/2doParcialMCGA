import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;