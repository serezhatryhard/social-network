

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 4 },
                { id: 2, message: 'It is my first post', likesCount: 6 },
                { id: 3, message: 'How are you?', likesCount: 3 },
                { id: 4, message: 'It is me', likesCount: 10 }
            ],
            newPostText: 'serega ebashy REACT'        
        },
        dialogsPage: {
            messagesData: [
                { id: 1, message: 'Yo' },
                { id: 2, message: 'Good luck!' },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'It is me' }
            ],
            dialogsData:  [
                { id: 1, name: 'Valera', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2ZYWuLpIgzPyJ_0zEZoSOw244iMYJjQykQ&usqp=CAU' },
                { id: 2, name: 'Andrew', imageSrc: 'https://w7.pngwing.com/pngs/551/804/png-transparent-discord-logo-avatar-avatar-heroes-logo-discord.png' },
                { id: 3, name: 'Sveta', imageSrc: 'https://papik.pro/en/uploads/posts/2022-06/1655712258_38-papik-pro-p-cool-profile-picture-avatars-39.jpg' },
                { id: 4, name: 'Viktor', imageSrc: 'https://cdn.imgbin.com/0/23/11/imgbin-discord-avatar-twitch-youtube-profile-black-and-brown-gorilla-illustration-xTvjfU0FPPCL5zpz4ZJEHtTMm.jpg' }
            ], 
        },
        navbarFriends: [
            { id: 1, name: 'Valera', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2ZYWuLpIgzPyJ_0zEZoSOw244iMYJjQykQ&usqp=CAU' },
            { id: 2, name: 'Andrew', imageSrc: 'https://w7.pngwing.com/pngs/551/804/png-transparent-discord-logo-avatar-avatar-heroes-logo-discord.png' },
            { id: 3, name: 'Sveta', imageSrc: 'https://papik.pro/en/uploads/posts/2022-06/1655712258_38-papik-pro-p-cool-profile-picture-avatars-39.jpg' }
        ]
    },

    _callSubscriber () {},

    getState () {
        return this._state
    },

    addPost (postMessage) {
        debugger
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 5,
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe (observer) {
        this._callSubscriber = observer
    }
}


export default store