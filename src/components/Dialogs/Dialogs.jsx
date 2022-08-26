import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem'
import Message from './Message/Message'



const Dialogs = props => {

    

    let messagesElements = props.messagesData
    .map(message => <Message message={message.message}/>)

    let dialogsElements = props.dialogsData
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