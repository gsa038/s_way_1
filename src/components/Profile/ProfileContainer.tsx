import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfile, getStatus, updateStatus, uploadPhoto, saveProfile, ProfileStateType } from '../../redux/profile-reducer'
import { AuthStateType } from '../../redux/auth-reducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { ProfileType } from '../../types/types';

type MatchParamType = {
    params: {
        userId: number
    }
}

type MapStatePropsType = {
    userProfile: ProfileStateType,
    status: string,
    auth: AuthStateType,
    match: MatchParamType
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number | null) => void,
    getStatus: (userId: number | null) => void,
    setUserProfile: () => void, 
    updateStatus: () => void,
    uploadPhoto: () => void,
    saveProfile: (formData: ProfileType) => Promise<void>
}

type OwnDispatchPropsType = {
    isOwner: boolean
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & OwnDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

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