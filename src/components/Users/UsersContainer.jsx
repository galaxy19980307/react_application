import React from "react";
import {connect} from "react-redux";
import {changeFollowThunkCreator, getUsersThunkCreator, setCurrentPageThunkCreator} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
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
    }
}
export default compose(connect(mapStateToProps, {
        getUsersThunkCreator,
        setCurrentPageThunkCreator,
        changeFollowThunkCreator
    }),
    withAuthRedirect)(UsersContainer)