import React from 'react'
import s from './NavFriendsItem.module.css'
import { FriendType } from '../../../../types/types'

const NavFriendsItem: React.FC<FriendType> = (props) => {
    return (
        <div className={s.NavFriendsItem}>
            <img className={s.ava_img} src={props.ava} alt=""/>
            <span className={s.nickname}>{props.nickname}</span>
        </div>
    )
}

export default NavFriendsItem