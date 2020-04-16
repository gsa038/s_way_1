import React from 'react';
import { toggleFollow, toggleIsFetching, getUsers, toggleFollowingProgress, follow } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsersState, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            const {currentPage, pageSize} = this.props;
            this.props.getUsers(currentPage, pageSize);
        }
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, { toggleFollow, toggleIsFetching, toggleFollowingProgress, getUsers, follow }),
    withAuthRedirect
)
    (UsersContainer);

