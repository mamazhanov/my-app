const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_IMAGE = 'UPDATE-NEW-IMAGE';
const UPDATE_NEW_COMMENT = 'UPDATE-NEW-COMMENT';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit!!!', imageUrl: 'https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', likesCount: 7 },
                { id: 2, comment: 'Lorem ipsum dolor', imageUrl: 'https://images.pexels.com/photos/4090826/pexels-photo-4090826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', likesCount: 7 },
                { id: 3, comment: 'A dolore quasi atque quis blanditiis. Aut temporibus ipsa hic, voluptate alias culpa quidem.', imageUrl: 'https://images.pexels.com/photos/3626214/pexels-photo-3626214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', likesCount: 7 },
            ],
            forNewPost: { newComment: '', newImage: '' }
        },
        directPage: {
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
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                comment: this._state.profilePage.forNewPost.newComment,
                imageUrl: this._state.profilePage.forNewPost.newImage,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.forNewPost.newComment = "";
            this._state.profilePage.forNewPost.newImage = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_COMMENT) {
            this._state.profilePage.forNewPost.newComment = action.newCommentText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_IMAGE) {
            this._state.profilePage.forNewPost.newImage = action.newImageUrl;
            this._callSubscriber(this._state);
        }

        else if (action.type === ADD_MESSAGE) {
            let newMessageBody = {
                id: 6,
                message: this._state.directPage.newMessage
            }
            this._state.directPage.messages.push(newMessageBody);
            this._state.directPage.newMessage = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.directPage.newMessage = action.newMessageText;
            this._callSubscriber(this._state);

        }
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

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const onImageUrlChangeActionCreator = (imageUrl) => {
    return { type: UPDATE_NEW_IMAGE, newImageUrl: imageUrl }
}
export const onCommentChangeActionCreator = (comment) => {
    return { type: UPDATE_NEW_COMMENT, newCommentText: comment }
}



export default store;
window.store = store;