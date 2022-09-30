import React from 'react'
import s from './Navbar.module.css'
import Friends from './Friends/Friends'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
    // debugger
    let friendsElements = props.state
        .map(friend => <Friends name={friend.name} imageSrc={friend.imageSrc} key={friend.id}/>)

    return (
       <div className={s.nav__block}>
            <nav className={s.nav}>
                <div className={s.nav__item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={s.nav__item}>
                    <NavLink to='/dialogs'>Messages</NavLink>
                </div>
                <div className={s.nav__item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={s.nav__item}>
                    <NavLink to='/music'>Music</NavLink>
                </div>
                <div className={s.nav__item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
            </nav>
            <div className={s.friends__block}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Navbar