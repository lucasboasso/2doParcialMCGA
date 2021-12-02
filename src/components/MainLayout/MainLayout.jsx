import React from 'react'
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import styles from "./MainLayout.module.css"

const MainLayout = (props) => {
    return (
        <div>
            <Header />
                <div className={styles.layout}>{props.children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;