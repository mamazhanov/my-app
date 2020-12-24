import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, onCommentChangeActionCreator, onImageUrlChangeActionCreator } from '../../redux/profile-reducer';
import Profile from './Profile';



const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewComment: (comment) => {
            dispatch(onCommentChangeActionCreator(comment));
        },
        updateNewImage: (imageUrl) => {
            dispatch(onImageUrlChangeActionCreator(imageUrl));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


export default ProfileContainer;
