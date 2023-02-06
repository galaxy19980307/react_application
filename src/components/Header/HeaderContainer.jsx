import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserAuth} from "../../Redux/auth-reducer";
import {authAPI} from "../../DAL/authAPI";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.checkUserAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setUserAuth(id, login, email);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setUserAuth})(HeaderContainer);
