import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersThunkCreator} from "../../Redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUsersThunkCreator(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={"/login"}/>;
        }
        return (<>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

let UseProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUsersThunkCreator})(UseProfileContainerWithRouter);
