import React from 'react'
import s from './Friends.module.css'


const Friends = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.image}>
                <img src ={props.imageSrc}></img>
            </div>
            <div className={s.friend__name}>{props.name}</div>
        </div>

    )
}

export default Friends