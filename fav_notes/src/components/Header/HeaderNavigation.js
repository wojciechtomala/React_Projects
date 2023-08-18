import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.css';

const HeaderNavigation = () => (
    <nav>
        <ul>
            <li className={styles.navigationItem}>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""}>twitters</NavLink>
            </li>
            <li className={styles.navigationItem}>
                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""} to="/articles">articles</NavLink>
            </li>
            <li className={styles.navigationItem}>
                <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""} to="/notes">notes</NavLink>
            </li>
        </ul>
    </nav>
)

export default HeaderNavigation;