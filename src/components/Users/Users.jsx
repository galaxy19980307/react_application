import React from "react";
import UserItem from "./UserItem/UserItem";
import Paginator from "../Utils/Paginators/Paginator";

const Users = (props) => {
    return (
        <div>
            <div>
                <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}/>
            </div>
            <div>
                {props.users.map(user => <UserItem followingInProgress={props.followingInProgress}
                                                   key={user.id} id={user.id}
                                                   photos={user.photos.small}
                                                   name={user.name}
                                                   location={user.location}
                                                   followed={user.followed}
                                                   changeFollowThunkCreator={props.changeFollowThunkCreator}/>)}
            </div>
        </div>

    )
}
export default Users;