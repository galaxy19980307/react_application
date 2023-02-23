import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuthThunkCreator, logoutUserThunkCreator} from "../../Redux/auth-reducer";
import {compose} from "redux";
import Preloader from "../Preloader/Preloader";

class HeaderContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : this.props.checkAuthThunkCreator()}
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

