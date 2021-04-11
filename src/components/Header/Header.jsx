import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/transparent-down-icon-price-icon-sale-icon-5db3fcdbb80b06.3632805615720767637538.jpg'

const Header = (props) => {
    return <header className={s.header}>
        <img src={ logo } />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;