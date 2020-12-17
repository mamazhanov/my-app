import React from 'react'
import { sendMessageActionCreator, updateNewMessage } from '../../redux/store';
import s from './Direct.module.css'
import DirectItems from './DirectItems/DirectItems';
import Message from './Message/Message';
function Direct(props) {

    let state = props.state;
    let userElemenrs = state.dialogs.map(u => <DirectItems id={u.id} imageUrl={u.imageUrl} name={u.name} />);
    let messageElements = state.messages.map(m => <Message message={m.message} />);


    let sendMessage = () => {
        //props.addMessage();
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        //props.updateNewMessage(text);
        props.dispatch(updateNewMessage(text));
    }


    return (
        <div className={s.Direct}>
            <div className={s.dialogsItems}>
                {userElemenrs}
            </div>
            <div className={s.dialogs}>
                <div className={s.messages_window}>
                    {messageElements}
                </div>
                <div className={s.form}>
                    <textarea value={state.newMessage}
                        onChange={onMessageChange}
                        rows="1" />
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div >
    )
}

export default Direct;