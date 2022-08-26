import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.content__image}><img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' /></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJJ-BAkyVtBk2vKpkFf7yjELiyctbPFAMHUOjh6W_YQ&s' /></div>
        </div>
    )
}

export default ProfileInfo