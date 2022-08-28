import React from 'react'
import { postsData } from '../..'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts postsData = {props.state.postsData} addPost={props.addPost}/>
        </main>
    )
}

export default Profile