import React from 'react';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={10} />
        <div className={s.usersContainer}>
            {
                users.map(user => <User key={user.id} user={user}
                    followingInProgress={props.followingInProgress} follow={props.follow} />)
            }
        </div>
    </div>
}



export default Users;