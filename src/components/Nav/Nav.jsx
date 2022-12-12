import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {

    const getClassName = ({isActive}) => {
        return isActive ? s.activeLink : s.item
    }
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={getClassName}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={getClassName}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={getClassName}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={getClassName}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={getClassName}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Nav;