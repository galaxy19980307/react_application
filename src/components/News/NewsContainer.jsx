import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {addNewsAC, updateNewNewsTextAC} from "../../Redux/news-reducer";

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage,
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddNews: () => {
            dispatch(addNewsAC());
        },
        handleUpdateNewNewsText: (newNews) => {
            dispatch(updateNewNewsTextAC(newNews));
        }
    }

}


const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsContainer;