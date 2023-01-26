import React from "react";
import s from './News.module.css'
import New from "./New/New";

const News = (props) => {

    let newsElements = props.newsPage.newsData.map(n => <New key={n.id} by={n.by} name={n.name} publishTime={n.publishTime} img={n.img}/>)

    let newNewsElement = React.createRef();

    const onAddNews = () => {
        props.handleAddNews();
    }
    const onChangeNew = () => {
        let newText = newNewsElement.current.value;  // получает значение(текст) из текстэрии
        props.handleUpdateNewNewsText(newText);

    }
    return (
        <div>
            <h3>NEWS</h3>
            <div>
                <div>
                    <textarea onChange={onChangeNew} ref={newNewsElement} value={props.newsPage.newNewsText}/>
                </div>
                <div>
                    <button onClick={onAddNews}>Add news</button>
                </div>
            </div>
            <div className={s.news}>
                {newsElements}
            </div>
        </div>
    )
}
export default News;
