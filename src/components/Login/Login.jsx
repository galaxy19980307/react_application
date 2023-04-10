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
        const LoginForm = ({handleSubmit, error, captchaUrl}) => {
            console.log(captchaUrl)
            return (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field label={'Login'} name={"login"} component={input} validate={[required, maxLength30]}/>
                    </div>
                    <div>
                        <Field label={'Password'} name={"password"} component={input} validate={[required, maxLength30]}
                               type={"password"}/>
                    </div>
                    <div>
                        <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me
                    </div>
                    {error &&
                        <div className={s.error}>
                            {error}
                        </div>}

                    {captchaUrl &&
                        <div>
                            <img src={captchaUrl}/>
                            <div> <Field placeholder={'Enter code'} name={"captcha"} component={input} validate={[required]} /></div>
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
            this.props.loginUserThunkCreator(formData.login, formData.password, formData.rememberMe, formData.captcha)
        }
        return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={this.props.captchaUrl}/>
        </div>

    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {loginUserThunkCreator})(LoginContainer)