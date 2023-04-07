import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, setAvatarThunkCreator, setUserInformationThunkCreator,
    updateUserStatusThunkCreator
} from "../../Redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfileWithStatus (){
        let userId = this.props.match.params.userId;
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId)
    }
    componentDidMount() {
         this.refreshProfileWithStatus()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfileWithStatus()
        }
    }

    render() {
        return (<>
                <Profile {...this.props}
                owner={!this.props.match.params.userId}
                         setAvatarThunkCreator={this.props.setAvatarThunkCreator}
                         setUserInformationThunkCreator={this.props.setUserInformationThunkCreator}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        profileSave: state.profilePage.profileSave
    }
}

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

export default compose(connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatusThunkCreator,
        updateUserStatusThunkCreator,setAvatarThunkCreator, setUserInformationThunkCreator}),
    withAuthRedirect,
    withRouter)(ProfileContainer)
