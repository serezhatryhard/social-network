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
                <Post message='Hi, how are you?' likesAmount='10'/>
                <Post message='Its my first post' likesAmount='20'/>
                <Post />
            </div>
        </div>
    )
}

export default MyPosts