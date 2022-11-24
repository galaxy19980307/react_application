import React from "react";
import s from './Nav.module.css';


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                Profile
            </div>
            <div className={`${s.item} ${s.colormessages}`}>
                Messages
            </div>
            <div className={`${s.item} ${s.colornews}`}>
                News
            </div>
            <div className={`${s.item} ${s.colormusic}`}>
                Music
            </div>
            <div className={`${s.item} ${s.colorsettings}`}>
                Settings
            </div>
        </nav>
    )
}
export default Nav;