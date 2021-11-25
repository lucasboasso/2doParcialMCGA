import React from 'react'
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import styles from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Footer />                        
        </div>
    );
}

export default MainLayout;