import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;