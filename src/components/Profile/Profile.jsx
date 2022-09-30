import React from 'react'
import { postsData } from '../..'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer store={ props.store } />
        </main>
    )
}

export default Profile