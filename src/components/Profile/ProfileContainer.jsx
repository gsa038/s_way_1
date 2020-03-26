import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, showProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
// import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId

        this.props.showProfile(userId)
        // profileAPI.getProfile(userId)
        // .then(response => {
        //     this.props.setUserProfile(response.data);
        // });
    }

    render () {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    auth: state.auth
});

export default connect(mapStateToProps, { setUserProfile, showProfile }) (withRouter(ProfileContainer));