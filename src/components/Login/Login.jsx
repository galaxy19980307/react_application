import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength30, required} from "../Utils/ValidationField";
import {input} from "../Utils/FormControl/FormControl";
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'


class LoginContainer extends React.Component {
    render() {
        const LoginForm = (props) => {
            console.log(props)
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
                    {props.error && <div className={s.error}>
                        {props.error}
                    </div>}
                    <button>Log In</button>
                </form>
            )
        }


        const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

        if (this.props.isAuth) {
            return <Navigate to={"/profile"}/>
        }
        const onSubmit = (formData) => {
            console.log(formData)
            this.props.loginUserThunkCreator(formData.login, formData.password, formData.rememberMe)
        }

        return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {loginUserThunkCreator})(LoginContainer)