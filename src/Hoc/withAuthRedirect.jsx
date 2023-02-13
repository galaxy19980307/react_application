import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsAuth = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectedComponent = connect(mapStateToPropsAuth)(RedirectComponent)

    return ConnectedAuthRedirectedComponent
}

