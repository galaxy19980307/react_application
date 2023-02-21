import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {addNewsAC} from "../../Redux/news-reducer";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddNews: (newNewText) => {
            dispatch(addNewsAC(newNewText));
        },
    }

}
export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(News)
