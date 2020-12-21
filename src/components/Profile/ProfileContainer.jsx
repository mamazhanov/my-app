import React from 'react';
import { addPostActionCreator, onCommentChangeActionCreator, onImageUrlChangeActionCreator } from '../../redux/profile-reducer';
import Post from './Post/Post';
import Profile from './Profile';

function ProfileContainer(props) {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onImageUrlChange = (imageUrl) => {
        props.store.dispatch(onImageUrlChangeActionCreator(imageUrl));
    }
    let onCommentChange = (comment) => {
        props.store.dispatch(onCommentChangeActionCreator(comment));
    }


    return (
        <Profile profilePage={state}
            addPost={addPost}
            updateNewComment={onCommentChange}
            updateNewImage={onImageUrlChange} />
    )
}

export default ProfileContainer;
