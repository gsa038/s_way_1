import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId

        this.props.getUserProfile(userId)
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



export default connect(mapStateToProps, { setUserProfile, getUserProfile }) (withRouter(withAuthRedirect(ProfileContainer)));