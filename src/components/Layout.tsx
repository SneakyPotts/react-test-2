import styles from './Todo.module.scss'
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    )
}

export default Layout;