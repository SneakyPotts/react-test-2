import styles from './Todo.module.scss'
import {PropsWithChildren} from "react";

const Title = ({children}: PropsWithChildren) => {
    return (
        <h1 className={styles.cardTitle}>
            {children}
        </h1>
    )
}

export default Title;