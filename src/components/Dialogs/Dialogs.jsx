import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem'
import Message from './Message/Message'



const Dialogs = props => {

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
    }

    let messagesElements = props.state.messagesData
        .map(message => <Message message={message.message} />)

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} imageSrc={dialog.imageSrc} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.footer}>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs