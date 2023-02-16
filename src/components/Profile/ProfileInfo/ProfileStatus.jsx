import React from "react";
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
    state = {
        statusEdit: false,
        status: this.props.status
    }

    handleDoubleClick = () => {
        this.setState({
            statusEdit: true
        })
    }

    handleBlur = () => {
        this.setState({
            statusEdit: false
        })
        this.props.updateUserStatusThunkCreator(this.state.status)
    }
    onStatusChanged = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.statusEdit &&
                    <div>
                        <button onDoubleClick={this.handleDoubleClick}>{this.props.status || "Hello"} </button>
                    </div>}
                {this.state.statusEdit &&
                    <div>
                        <input onChange={this.onStatusChanged} className={s.button} autoFocus={true}
                               onBlur={this.handleBlur} value={this.state.status}/>
                    </div>}
            </div>
        )

    }
}

export default ProfileStatus;
