import React from "react";
import {connect} from "react-redux";
import {
    changeFollow,
    isLoading,
    saveUsersTotalCount,
    setFollowingProgress,
    setPageUsers,
    setUsers
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../DAL/usersAPI";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.isLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.saveUsersTotalCount(data.totalCount);
                this.props.isLoading(false)
            })
    }

    onPageChanged = (p) => {
        this.props.isLoading(true)
        this.props.setPageUsers(p)
        usersAPI.getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.isLoading(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    changeFollow, setUsers, setPageUsers, saveUsersTotalCount, isLoading,setFollowingProgress
})(UsersAPI);
