import React from "react";
import {connect} from "react-redux";
import {
    changeFollow, changeFollowThunkCreator,
    getUsersThunkCreator,
    setCurrentPageThunkCreator,
    setFollowingProgress
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (p) => {
        this.props.setCurrentPageThunkCreator(p, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged}
                   changeFollowThunkCreator={this.props.changeFollowThunkCreator}
                   setFollowingProgress={this.props.setFollowingProgress}/>
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
    changeFollow,
    setFollowingProgress,
    getUsersThunkCreator,
    setCurrentPageThunkCreator,
    changeFollowThunkCreator
})(UsersAPI);
