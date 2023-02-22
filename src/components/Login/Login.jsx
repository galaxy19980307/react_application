import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength30, required} from "../Utils/ValidationField";
import {input} from "../Utils/FormControl/FormControl";
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field label={'Login'} name={"login"} component={input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field label={'Password'} name={"password"} component={input} validate={[required, maxLength30]}
                       type={"Password"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me
            </div>
            <button>Log In</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.loginUserThunkCreator(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginUserThunkCreator})(Login)