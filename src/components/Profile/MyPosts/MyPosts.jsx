import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?'/>
                <Post message='Its my first post'/>
                <Post />
            </div>
        </div>
    )
}

export default MyPosts