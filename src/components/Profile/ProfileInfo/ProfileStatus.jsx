import React from "react";
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
    state = {
        statusEdit: false
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
    }

    render() {
        return (
            <div>
                {!this.state.statusEdit &&
                    <div>
                        <button  className={s.button} onDoubleClick={this.handleDoubleClick}>{this.props.status}</button>
                    </div>}
                {this.state.statusEdit &&
                    <div>
                        <input  className={s.button} autoFocus={true} onBlur={this.handleBlur} value={this.props.status}/>
                    </div>}
            </div>
        )

    }
}

export default ProfileStatus;
