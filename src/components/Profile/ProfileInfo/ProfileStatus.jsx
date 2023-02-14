import React from "react";

class ProfileStatus extends React.Component {
    state = {
        statusEdit: false
    }

    handleDoubleClick() {
        this.setState({
            statusEdit: true
        })
    }

    handleBlur() {
        this.setState({
            statusEdit: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.statusEdit &&
                    <div>
                        <span onDoubleClick={this.handleDoubleClick.bind(this)}>{this.props.status}</span>
                    </div>}
                {this.state.statusEdit &&
                    <div>
                        <input autoFocus={true} onBlur={this.handleBlur.bind(this)} value={this.props.status}/>
                    </div>}
            </div>
        )

    }
}

export default ProfileStatus;
