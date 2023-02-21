import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength15, required} from "../Utils/ValidationField";
import {input} from "../Utils/FormControl/FormControl";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field label={'Login'} name={"login"} component={input} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field label={'Password'} name={"password"} component={input} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me
            </div>
            <button>Log In</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;