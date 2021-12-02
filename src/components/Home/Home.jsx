import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Home Page</h1>
            <p>2do Parcial de Metodologias Computacionales de Gestion Administrativas</p>
            <h2>
                Alumno
            </h2>
            <ul>
                <li>
                    Lucas Boasso
                </li>
            </ul>
        </div>
    );
};

export default Home;