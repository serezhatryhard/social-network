import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state'


const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likesAmount={post.likesCount} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.dispatch(addPostActionCreator())
        newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.myPostsBlock}>
            My Posts
            <div>
                <div>
                    <textarea 
                    ref={newPostElement} 
                    onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts