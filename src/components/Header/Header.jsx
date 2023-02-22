import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Login} from "../Login/Login";

const Header = (props) => {

    return (
        <div>
            <div className={s.login}>
                {props.isAuth ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
            <div>
                {props.isAuth ?
                    <button onClick={props.logoutUserThunkCreator}>Log Out</button> : undefined
                }
            </div>

            <div>
                <header className={s.header}>
                    <img
                        src={'https://w7.pngwing.com/pngs/126/993/png-transparent-computer-icons-orange-sun-orange-logo-symbol.png'}
                        alt=''/>
                </header>
            </div>
        </div>
    )
}
export default Header;
