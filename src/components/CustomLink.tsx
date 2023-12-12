import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Todo.module.scss'

interface IProps {
    children: React.ReactNode;
    to: string;
}

function CustomLink({children, to}: IProps) {
    return (
        <NavLink
            to={to}
            className={styles.navLink}
        >
            {children}
        </NavLink>
    )
}

export default CustomLink;