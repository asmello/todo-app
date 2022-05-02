
import { Link, Outlet } from "react-router-dom";

import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles.content}>
            <ul className={styles.list}>
                <li>
                    <Link to="app">About App</Link>
                </li>
                <li>
                    <Link to="author">About Author</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}