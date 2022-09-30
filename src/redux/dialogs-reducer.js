const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState =  {
    messagesData: [
        { id: 1, message: 'Yo' },
        { id: 2, message: 'Good luck!' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'It is me' }
    ],
    dialogsData: [
        { id: 1, name: 'Valera', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2ZYWuLpIgzPyJ_0zEZoSOw244iMYJjQykQ&usqp=CAU' },
        { id: 2, name: 'Andrew', imageSrc: 'https://w7.pngwing.com/pngs/551/804/png-transparent-discord-logo-avatar-avatar-heroes-logo-discord.png' },
        { id: 3, name: 'Sveta', imageSrc: 'https://papik.pro/en/uploads/posts/2022-06/1655712258_38-papik-pro-p-cool-profile-picture-avatars-39.jpg' },
        { id: 4, name: 'Viktor', imageSrc: 'https://cdn.imgbin.com/0/23/11/imgbin-discord-avatar-twitch-youtube-profile-black-and-brown-gorilla-illustration-xTvjfU0FPPCL5zpz4ZJEHtTMm.jpg' }
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: 6, message: body})
            return state
        default: 
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer