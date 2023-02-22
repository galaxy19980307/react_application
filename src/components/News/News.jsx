import React from "react";
import s from './News.module.css'
import New from "./New/New";
import {Field, reduxForm} from "redux-form";
import {textarea} from "../Utils/FormControl/FormControl";
import {maxLength30, required} from "../Utils/ValidationField";

const News = (props) => {

    let newsElements = props.newsPage.newsData.map(n => <New key={n.id} by={n.by} name={n.name}
                                                             publishTime={n.publishTime} img={n.img}/>)

    const NewsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field label={'Enter your news'} name={"newNewText"} component={textarea}
                           validate={[required, maxLength30]}/>
                </div>
                <button>Add news</button>
            </form>
        )
    }
    const NewsReduxForm = reduxForm({form: 'AddNews'})(NewsForm)
    const onAddNews = (values) => {
        props.handleAddNews(values.newNewText);
    }
    return (
        <div>
            <h3>NEWS</h3>
            <div>
                <NewsReduxForm onSubmit={onAddNews}/>
            </div>
            <div className={s.news}>
                {newsElements}
            </div>
        </div>
    )

}

export default News;
