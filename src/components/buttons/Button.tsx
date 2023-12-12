import React from "react";
import styles from './Buttons.module.scss'

interface IProps {
    children: React.ReactElement | React.ReactNode;
    onClick?: () => void;
}

function Button({children, ...props}: IProps) {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    )
}

export default Button;