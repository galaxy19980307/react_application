import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersThunkCreator} from "../../Redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUsersThunkCreator(userId)
    }

    render() {
        return (<>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

let UseProfileContainerWithRouter = withRouter(ProfileContainer)

let AuthRedirectComponent = withAuthRedirect(UseProfileContainerWithRouter)

export default connect(mapStateToProps, {getUsersThunkCreator})(AuthRedirectComponent);
