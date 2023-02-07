import React from "react";
import UserItem from "./UserItem/UserItem";
import s from './Users.module.css'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
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
                                                             setFollowingProgress={props.setFollowingProgress}
                                                             key={user.id} id={user.id}
                                                             photos={user.photos.small}
                                                             status={user.status}
                                                             name={user.name}
                                                             location={user.location} changeFollow={props.changeFollow}
                                                             followed={user.followed}/>)}
            </div>
        </div>

    )
}
export default Users;