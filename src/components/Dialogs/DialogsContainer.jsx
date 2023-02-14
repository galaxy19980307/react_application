import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {

    return {

        handleAddMessage: () => {
            dispatch(addMessageActionCreator());
        },

        handleChangeMessage: (newMessage) => {
            dispatch(updateNewMessageTextActionCreator(newMessage));
        }
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
