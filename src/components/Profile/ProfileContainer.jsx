import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? 
        this.props.match.params.userId : this.props.auth.userId

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render () {
        // console.log("Profile render")
        return (
            <div>
                <Profile {...this.props} 
                    userProfile={this.props.userProfile}
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    // console.log("Profile mapStateToProps")
    return ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    auth: state.auth
});
}



export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
    )
    (ProfileContainer);