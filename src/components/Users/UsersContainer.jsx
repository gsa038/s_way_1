import Users from './Users';
import { toggleFollowAC, setUserswAC } from '../../redux/users-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {dispatch(toggleFollowAC(userId))},
        // unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUserswAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;