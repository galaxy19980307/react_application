import React from "react";
import s from './Nav.module.css';


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${s.item} ${s.colormessages}`}>
                <a href="/dialogs">Dialogs</a>
            </div>
            <div className={`${s.item} ${s.colornews}`}>
                <a href="/news">News</a>
            </div>
            <div className={`${s.item} ${s.colormusic}`}>
                <a href="/music">Music</a>
            </div>
            <div className={`${s.item} ${s.colorsettings}`}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}
export default Nav;