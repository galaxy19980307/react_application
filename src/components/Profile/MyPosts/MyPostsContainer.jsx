import React from "react";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts);
export default MyPostsContainer;
