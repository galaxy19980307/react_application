import React from "react";
import UserItem from "./UserItem/UserItem";
import s from './Users.module.css'
import {Navigate} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    if (!props.isAuth) {
        return <Navigate to={"/login"}/>;
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            <div>
                {props.usersPage.users.map(user => <UserItem followingInProgress={props.followingInProgress}
                                                             key={user.id} id={user.id}
                                                             photos={user.photos.small}
                                                             status={user.status}
                                                             name={user.name}
                                                             location={user.location}
                                                             followed={user.followed}
                                                             changeFollowThunkCreator={props.changeFollowThunkCreator}/>)}
            </div>
        </div>

    )
}
export default Users;