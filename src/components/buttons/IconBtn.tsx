import React, {ReactNode} from "react";
import styles from './Buttons.module.scss'

interface IProps {
    children: React.ReactElement;
    onClick: () => void;
}

const IconBtn = ({children, ...props}: IProps) => {
    return (
        <button {...props} className={styles.iconBtn}>
            {children}
        </button>
    )
}

export default IconBtn;