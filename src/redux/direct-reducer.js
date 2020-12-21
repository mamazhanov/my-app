const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych', imageUrl: 'https://img.icons8.com/bubbles/2x/user-male.png' },
        { id: 2, name: 'Andrew', imageUrl: 'https://img.icons8.com/nolan/2x/checked-user-male.png' },
        { id: 3, name: 'Sveta', imageUrl: 'https://img.icons8.com/color/2x/user-male-circle.png' },
        { id: 4, name: 'Sasha', imageUrl: 'https://img.icons8.com/plasticine/2x/user.png' },
        { id: 5, name: 'Viktor', imageUrl: 'https://img.icons8.com/bubbles/2x/user-male.png' },
        { id: 6, name: 'Valera', imageUrl: 'https://img.icons8.com/doodle/2x/user-male-circle.png' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
    newMessage: "Hello World!"
};

const directReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessageText;
            return state;

        case ADD_MESSAGE:
            let newMessageBody = {
                id: 6,
                message: state.newMessage
            }
            state.messages.push(newMessageBody);
            state.newMessage = '';
            return state;
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessage = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessageText: text
    }
}

export default directReducer;