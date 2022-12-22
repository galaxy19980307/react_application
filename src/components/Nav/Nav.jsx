import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    let friends = props.listOfFriends.map((el) => (el.friend));
    const getClassName = ({isActive}) => {
        return isActive ? s.activeLink : s.item
    }
    const ulStyle = {marginTop: '120px'}

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
            <div style={ulStyle}>
                <div className={s.friends}>Friends</div>
                <div className={s.friend}>
                    {friends}
                </div>
            </div>
        </nav>

    )
}
export default Nav;