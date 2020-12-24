const ADD_POST = 'ADD-POST';
const UPDATE_NEW_IMAGE = 'UPDATE-NEW-IMAGE';
const UPDATE_NEW_COMMENT = 'UPDATE-NEW-COMMENT';


let initialState = {
    posts: [
        { id: 1, comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit!!!', imageUrl: 'https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', likesCount: 7 },
        { id: 2, comment: 'Lorem ipsum dolor', imageUrl: 'https://images.pexels.com/photos/4090826/pexels-photo-4090826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', likesCount: 7 },
        { id: 3, comment: 'A dolore quasi atque quis blanditiis. Aut temporibus ipsa hic, voluptate alias culpa quidem.', imageUrl: 'https://images.pexels.com/photos/3626214/pexels-photo-3626214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', likesCount: 7 },
    ],
    forNewPost: { newComment: '', newImage: '' }
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                comment: state.forNewPost.newComment,
                imageUrl: state.forNewPost.newImage,
                likesCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.forNewPost.newComment = "";
            stateCopy.forNewPost.newImage = "";
            return stateCopy;
        }

        case UPDATE_NEW_IMAGE: {
            let stateCopy = { ...state };
            stateCopy.forNewPost.newImage = action.newImageUrl;
            return stateCopy;
        }

        case UPDATE_NEW_COMMENT: {
            let stateCopy = { ...state };
            stateCopy.forNewPost.newComment = action.newCommentText;
            return stateCopy;
        }
        default:
            return state;
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


export default profileReducer;