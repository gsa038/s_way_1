import React from 'react';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
    currentPage: number, 
    onPageChanged: (pageNumber: number) => void, 
    totalUsersCount: number, 
    pageSize: number, 
    users: Array<UserType>,
    followingInProgress: Array<number>,
    follow: (follow: boolean, userId: number) => void
}

let Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={5} />
        <div className={s.usersContainer}>
            {
                users.map(user => <User key={user.id} user={user}
                    followingInProgress={props.followingInProgress} follow={props.follow} />)
            }
        </div>
    </div>
}



export default Users;