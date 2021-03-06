import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/file/app/client/thumb/4ab55ad7-33c3-455c-90c7-c0305fc8eb9f_200x200.png?1609680675892' />

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;