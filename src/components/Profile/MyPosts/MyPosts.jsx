import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

    

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likesAmount={post.likesCount} />)

    return (
        <div className={s.myPostsBlock}>
            My Posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts