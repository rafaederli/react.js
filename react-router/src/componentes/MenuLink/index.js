import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
    
    let linkDestacado = styles.linkDestacado
    let link = styles.link

    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? linkDestacado : link}
        >
            {children}
        </NavLink>
    );
}