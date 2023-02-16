import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../Redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {
        return (<>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

export default compose(connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withAuthRedirect,
    withRouter)(ProfileContainer)
