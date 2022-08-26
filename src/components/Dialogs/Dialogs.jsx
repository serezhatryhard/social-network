import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem'
import Message from './Message/Message'
import { messagesData, dialogsData } from '../../index'


const Dialogs = props => {

    

    let messagesElements = messagesData
    .map(message => <Message message={message.message}/>)

    let dialogsElements = dialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs