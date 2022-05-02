import { useState } from "react";
import { NavLink } from "react-router-dom";

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import style from "./Navbar.module.css";

export default function Navbar() {
    const links = [
        { id: 1, path: "/", text: "Home" },
        { id: 2, path: "about", text: "About" }
    ];

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className={style.navBar}>
            <button onClick={() => setNavbarOpen(prev => !prev)}>
                {navbarOpen ?
                    <MdClose color="#fff" width="40px" height="40px" />
                    : <FiMenu color="#7b7b7b" width="40px" height="40px" />}
            </button>
            <ul className={`${style.menuNav}${navbarOpen ? ` ${style.showMenu}` : ""}`}>
                {links.map(link => (
                    <li key={link.id}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? style.activeLink : undefined}
                            onClick={() => setNavbarOpen(false)} >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}