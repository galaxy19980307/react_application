import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
