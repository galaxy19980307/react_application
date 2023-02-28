import React from "react";
import {connect} from "react-redux";
import {changeFollowThunkCreator, getUsersThunkCreator, setCurrentPageThunkCreator} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsersSelectors
} from "./usersSelectors/usersSelectors";

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
        users: getUsersSelectors(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state),
    }
}
export default compose(connect(mapStateToProps, {
        getUsersThunkCreator,
        setCurrentPageThunkCreator,
        changeFollowThunkCreator
    }),
    withAuthRedirect)(UsersContainer)