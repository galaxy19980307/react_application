import React from "react";
import {connect} from "react-redux";
import {changeFollowThunkCreator, getUsersThunkCreator, setCurrentPageThunkCreator} from "../../Redux/users-reducer";
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
                   changeFollowThunkCreator={this.props.changeFollowThunkCreator}/>
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
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    getUsersThunkCreator,
    setCurrentPageThunkCreator,
    changeFollowThunkCreator
})(UsersAPI);
