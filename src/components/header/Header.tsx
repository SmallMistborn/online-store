import React, { FC, memo } from "react";
import Navbar from "./Navbar";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => (
    <header className={styles.header__layout}>
    {/*// <header>*/}
        <Link to="/" className={styles.header__logo}>Logo</Link>
        <Navbar />

    </header>
);

export default memo(Header);