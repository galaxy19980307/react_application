import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength30, required} from "../../Utils/ValidationField";
import {textarea} from "../../Utils/FormControl/FormControl";


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field label={'Enter your post'} name={"newPostText"} validate={[required, maxLength30]}
                       component={textarea}/>
            </div>
            <button>Add Post</button>
        </form>
    )
}
export const PostReduxForm = reduxForm({form: 'AddPost'})(React.memo(PostForm))
