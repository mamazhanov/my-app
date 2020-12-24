import React from 'react'
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessage } from '../../redux/direct-reducer';
import Direct from './Direct';


const mapStateToProps = (state) => {
    return {
        directPage: state.directPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessage(text));
        }
    }
}

const DirectContainer = connect(mapStateToProps, mapDispatchToProps)(Direct);

export default DirectContainer;