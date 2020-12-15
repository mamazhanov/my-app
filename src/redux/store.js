let rerenderEntireTree = () => {
    console.log("change!!!");
}

let state = {
    profilePage: {
        posts: [
            { id: 1, comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit!!!', imageUrl: 'https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', likesCount: 7 },
            { id: 2, comment: 'Lorem ipsum dolor', imageUrl: 'https://images.pexels.com/photos/4090826/pexels-photo-4090826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', likesCount: 7 },
            { id: 3, comment: 'A dolore quasi atque quis blanditiis. Aut temporibus ipsa hic, voluptate alias culpa quidem.', imageUrl: 'https://images.pexels.com/photos/3626214/pexels-photo-3626214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', likesCount: 7 },
        ],
        forNewPost: { newComment: 'new coment', newImage: 'https://images.pexels.com/photos/162174/cat-british-shorthair-mieze-blue-eye-162174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 4,
        comment: state.profilePage.forNewPost.newComment,
        imageUrl: state.profilePage.forNewPost.newImage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.forNewPost.newComment = "";
    state.profilePage.forNewPost.newImage = "";
    rerenderEntireTree(state);

}
export let updateNewComment = (newCommentText) => {
    state.profilePage.forNewPost.newComment = newCommentText;
    rerenderEntireTree(state);
}
export let updateNewImage = (newImageUrl) => {
    state.profilePage.forNewPost.newImage = newImageUrl;
    rerenderEntireTree(state);
}


export let addMessage = () => {
    let newMessageBody = {
        id: 6,
        message: state.directPage.newMessage
    }
    state.directPage.messages.push(newMessageBody);
    state.directPage.newMessage = '';
    rerenderEntireTree(state);
}

export let updateNewMessage = (newMessageText) => {
    state.directPage.newMessage = newMessageText;
    rerenderEntireTree(state);
}




export const subscribe = (observer) => {
    rerenderEntireTree = observer;  // observer
}


export default state;