import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'


const Profile = () => {
    return (
        <main>
            Main content 
            <div className={s.content__image}><img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' /></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJJ-BAkyVtBk2vKpkFf7yjELiyctbPFAMHUOjh6W_YQ&s' /></div>
            <MyPosts />
        </main>
    )
}

export default Profile