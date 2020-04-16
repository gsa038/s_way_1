import React from 'react';
import s from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';


let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <Pagination currentPage={currentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div className={s.usersContainer}>
            {
                users.map(user => <User key={user.id} user={user}
                    followingInProgress={props.followingInProgress} follow={props.follow} />)
            }
        </div>
    </div>
}



export default Users;