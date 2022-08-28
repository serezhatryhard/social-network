import React from 'react'
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <div className={s.image}>
                <img src={props.imageSrc}></img>
            </div>
            <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem