"use client";

import { useContext } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "../../context/themeContext";

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    );
};

export default DarkModeToggle;