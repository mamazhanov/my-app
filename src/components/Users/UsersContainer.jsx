import Users from "./Users";
import {connect} from "react-redux";
import firebase from "firebase";
import React from 'react';
import {setUsers} from "../../redux/users-reducer";

class UsersContainer extends React.Component{

    componentDidMount() {
        const db = firebase.database();
        const items = db.ref("items")
        items.on('value', value => {
            this.props.setUsers(value.val());
            // this.props.users.push(value.val());
            console.log(value.val());
        })
    }

    render() {
        return (
            <Users {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {setUsers})(UsersContainer);