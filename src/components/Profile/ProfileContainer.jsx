import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile, getStatus, updateStatus, uploadPhoto, saveProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.auth.userId;

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render () {
        return (
            <div>
                <Profile {...this.props}
                isOwner={!this.props.match.params.userId} 
                    userProfile={this.props.userProfile}
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    uploadPhoto={this.props.uploadPhoto} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    auth: state.auth
});
}



export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getStatus, updateStatus, uploadPhoto, saveProfile }),
    withRouter,
    withAuthRedirect
    )
    (ProfileContainer);