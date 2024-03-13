import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Home Page</h1>
            <p>Examen Final Modelos Computacionales de Gestion Administrativa</p>
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