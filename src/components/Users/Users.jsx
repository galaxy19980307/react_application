import React from "react";
import axios from "axios";
import UserItem from "./UserItem";

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onFollow = (userId) => {
        this.props.handleFollow(userId);
    }
    onUnfollow = (userId) => {
        this.props.handleUnfollow(userId);
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users
                    .map(user => <UserItem key={user.id} id={user.id} photos={user.photos.small}
                                           status={user.status}
                                           name={user.name}
                                           location={user.location} onFollow={this.onFollow}
                                           onUnfollow={this.onUnfollow}
                                           followed={user.followed}/>)}
            </div>
        )
    }
}

export default Users;