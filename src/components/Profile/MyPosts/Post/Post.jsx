import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.title}>{props.message}</div>
            <img src='https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_QL75_UY281_CR86,0,500,281_.jpg'></img>
            <div>Likes amount: {props.likesAmount}</div>
        </div>
    )
}

export default Post