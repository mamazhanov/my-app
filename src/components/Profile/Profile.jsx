import React from 'react';
import { addPostActionCreator, onCommentChangeActionCreator, onImageUrlChangeActionCreator } from '../../redux/profile-reducer';
import Post from './Post/Post';
import s from './Profile.module.css'

function Profile(props) {
    debugger;
    let state = props.profilePage;
    let postElements = state.posts.map(p => <Post comment={p.comment} image={p.imageUrl} likesCount={p.likesCount} />);

    let addPost = () => {
        props.addPost();
    }
    let onImageUrlChange = (e) => {
        let imageUrl = e.target.value;
        props.updateNewImage(imageUrl);
    }
    let onCommentChange = (e) => {
        let comment = e.target.value;
        props.updateNewComment(comment);
    }


    return (
        <div className={s.profile}>
            <div className={s.userInfo}>
                <div className={s.avatar}>
                    <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="user-image" />
                </div>
                <div className={s.description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis asperiores fugiat quos illo minus magni facilis nesciunt, provident.
                </div>
            </div>
            <div className={s.addPostBlock}>
                <label htmlFor="input">Panel for adding posts</label>
                <input
                    value={state.forNewPost.newImage}
                    type="text"
                    onChange={onImageUrlChange}
                    id="input"
                    placeholder="please enter the address of the picture"
                    required />
                <textarea
                    value={state.forNewPost.newComment}
                    onChange={onCommentChange}
                    rows="4"
                    placeholder="comment.."
                    required />
                <button onClick={addPost}>ADD</button>
            </div>
            <div className={s.postsContent}>
                {postElements}
            </div>
        </div>
    )
}

export default Profile;
