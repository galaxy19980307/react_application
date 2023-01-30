import React from "react";
import {connect} from "react-redux";
import {followAC, saveUsersTotalCountAC, setPageUsersAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users from "./Users";
import axios from "axios";

class UsersAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.saveTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (p) => {
        this.props.setPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })

    }

    onFollow = (userId) => {
        this.props.handleFollow(userId);
    }
    onUnfollow = (userId) => {
        this.props.handleUnfollow(userId);
    }

    render() {

        return <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged} usersPage={this.props.usersPage} onFollow={this.onFollow}
                      onUnfollow={this.onUnfollow}/>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleFollow: (userId) => {
            dispatch(followAC(userId));
        },
        handleUnfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setPage: (pageNumber) => {
            dispatch(setPageUsersAC(pageNumber));
        },
        saveTotalCount: (totalCount) => {
            dispatch(saveUsersTotalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
