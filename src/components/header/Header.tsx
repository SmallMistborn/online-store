import React, { FC } from "react";
import Navbar from "./Navbar";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";


const Header: FC = () => {
    return (
        <header className={styles.header__layout}>
            <Link to="/" className={styles.header__logo}>Logo</Link>

                <Navbar />

        </header>
    );
};

export default Header;