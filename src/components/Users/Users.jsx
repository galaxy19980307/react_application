import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    img: "https://mf.bmstu.ru/assets/news/2016/s35/img/06.jpg",
                    fullName: 'Uliana',
                    follow: false,
                    status: 'Call me, when you will be free',
                    location: {
                        country: 'Russia',
                        city: 'Serpukhov'
                    }
                },
                {
                    id: 2,
                    img: "https://logosm.ru/images/%D0%A1%D1%82%D1%83%D0%B4%D0%B8%D1%8F_%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%B8%D0%BA%D0%B0/%D0%93%D0%BE%D0%BB%D0%B8%D1%83%D1%81_%D0%9F%D0%B5%D1%82%D1%80_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87.jpg",
                    fullName: 'Petr',
                    follow: true,
                    status: 'Hello!',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk'
                    }
                },
                {
                    id: 3,
                    img: 'https://mf.bmstu.ru/assets/news/2016/s35/img/07.jpg',
                    fullName: 'Valya',
                    follow: false,
                    status: 'I am good friend',
                    location: {
                        country: 'Thailand',
                        city: 'Bangkok'
                    }
                }
            ]
        )
    }
    const onFollow = (userId) => {
        props.handleFollow(userId);
    }
    const onUnfollow = (userId) => {
        props.handleUnfollow(userId);
    }
    let usersElements = props.usersPage.users
        // .map(user => <UserItem key={user.id} img={user.img} fullName={user.fullName} follow={user.follow} status={user.status} country={user.location.country} city={user.location.city}/>)
        .map(user => <UserItem key={user.id} {...user} onFollow={onFollow} onUnfollow={onUnfollow}/>)
    return (
        <div>
            {usersElements}
        </div>
    )
}
export default Users;
