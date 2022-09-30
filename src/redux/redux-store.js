import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogs-reducer";
import { navbarFriendsReducer } from "./navbarFriends-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarFriends: navbarFriendsReducer
})

let store = createStore(reducers)

export default store