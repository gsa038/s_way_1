import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { HeaderPropsType } from './HeaderContainer'

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://www.quizony.com/company-name-generator/imageForSharing.jpg" alt="Company name"></img>
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>
                    <div>{props.login} : {props.userId}</div>
                    <button className={s.logoutButton} onClick={props.doLogout}>Log out</button>
                  </div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header