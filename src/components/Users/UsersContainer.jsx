import Users from './Users';
import { toggleFollowAC, setUserswAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))},
        setUsers: (users) => {
            dispatch(setUserswAC(users))},
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;