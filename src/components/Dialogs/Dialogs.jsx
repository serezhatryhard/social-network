import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem'
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'


const Dialogs = props => {

    let state = props.dialogsPage

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    let messagesElements = state.messagesData
        .map(message => <Message message={message.message} key={message.id} />)

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} imageSrc={dialog.imageSrc} key={dialog.id} />)

    let newMessageBody = state.newMessageBody

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={s.footer}>
                <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs