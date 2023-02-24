import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuthThunkCreator, logoutUserThunkCreator} from "../../Redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    render() {
        return (<>
                <Header {...this.props}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default compose(connect(mapStateToProps, {checkAuthThunkCreator, logoutUserThunkCreator}))(HeaderContainer)

