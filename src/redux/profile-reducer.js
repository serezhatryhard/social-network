const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState =  {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 4 },
        { id: 2, message: 'It is my first post', likesCount: 6 },
        { id: 3, message: 'How are you?', likesCount: 3 },
        { id: 4, message: 'It is me', likesCount: 10 }
    ],
    newPostText: 'serega ebashy REACT'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 5,
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default: 
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer