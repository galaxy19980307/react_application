import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {profileAPI} from "../../DAL/profileAPI";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
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
        profile: state.profilePage.profile
    }
}

export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

let UseProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(UseProfileContainerWithRouter);
