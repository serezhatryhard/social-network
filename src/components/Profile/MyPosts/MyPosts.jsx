import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likesAmount={post.likesCount} key={post.id }/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
        newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myPostsBlock}>
            My Posts
            <div>
                <div>
                    <textarea 
                    ref={newPostElement} 
                    onChange={ onPostChange }
                    />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts