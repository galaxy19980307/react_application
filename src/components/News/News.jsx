import React from "react";
import s from './News.module.css'
import New from "./New/New";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {Field, reduxForm} from "redux-form";

const News = (props) => {

    let newsElements = props.newsPage.newsData.map(n => <New key={n.id} by={n.by} name={n.name}
                                                             publishTime={n.publishTime} img={n.img}/>)

    const NewsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter your news'} name={"newNewText"} component={"textarea"}/>
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
