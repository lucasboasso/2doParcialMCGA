import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import { useAuth } from "../../components/Auth/AuthProvider";
import { API_URL } from "../../components/Auth/authConstants";

const Navbar = () => {
    const { isAuthenticated, signout, getRefreshToken } = useAuth();

    async function handleSignOut(e) {
        e.preventDefault();

        try {
          const response = await fetch(`${API_URL}/signout`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getRefreshToken()}`,
            },
          });
          if (response.ok) {
            signout();
          }
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                {!isAuthenticated && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <li>
                            <Link to="/productos">Productos</Link>
                        </li>
                        <li>
                            <a href="#" onClick={handleSignOut}>
                                Sign out
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;