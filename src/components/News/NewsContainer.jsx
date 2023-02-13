import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {addNewsAC, updateNewNewsTextAC} from "../../Redux/news-reducer";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
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

let AuthRedirectComponent = withAuthRedirect(News)

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default NewsContainer;