import React from 'react'
import { sendMessageActionCreator, updateNewMessage } from '../../redux/direct-reducer';
import Direct from './Direct';


function DirectContainer(props) {
    let state = props.store.getState().directPage;


    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessage(text));
    }


    return (
        <Direct directPage={state} addMessage={sendMessage} updateNewMessage={onMessageChange} />
    )
}

export default DirectContainer;