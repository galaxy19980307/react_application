import React from "react";
import {connect} from "react-redux";
import {changeFollow, isLoading, saveUsersTotalCount, setPageUsers, setUsers} from "../../Redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.isLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoading(false)
                this.props.setUsers(response.data.items);
                this.props.saveUsersTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (p) => {
        this.props.isLoading(true)
        this.props.setPageUsers(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.isLoading(false)
                this.props.setUsers(response.data.items);
            })

    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged} usersPage={this.props.usersPage} changeFollow={this.props.changeFollow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, { changeFollow, setUsers, setPageUsers, saveUsersTotalCount, isLoading
})(UsersAPI);
