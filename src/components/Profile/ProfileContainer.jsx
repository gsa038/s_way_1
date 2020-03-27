import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile } from '../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId

        this.props.getUserProfile(userId)
    }

    render () {
        if (!this.props.auth.isAuth) return <Redirect to={'/login'} />
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



export default connect(mapStateToProps, { setUserProfile, getUserProfile }) (withRouter(ProfileContainer));