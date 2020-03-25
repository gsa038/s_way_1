import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.auth.userId
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
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

export default connect(mapStateToProps, { setUserProfile }) (withRouter(ProfileContainer));