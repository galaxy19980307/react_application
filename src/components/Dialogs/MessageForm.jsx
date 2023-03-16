import React from "react";
import {Field, reduxForm} from "redux-form";
import {textarea} from "../Utils/FormControl/FormControl";
import {maxLength30, required} from "../Utils/ValidationField";


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field label={'Enter your message'} name={"newMessageBody"} component={textarea}
                       validate={[required, maxLength30]}/>
            </div>
            <button>Send</button>
        </form>
    )
}
export const MessageReduxForm = reduxForm({form: 'DialogAddMessage'})(React.memo(MessageForm))
