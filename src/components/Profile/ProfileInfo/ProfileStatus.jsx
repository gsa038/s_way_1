import React from 'react';
// import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        //// Check this code
        if (this.state.status !== this.props.status)
        {
            this.props.updateStatus(this.state.status);
            this.setState({
                status: this.props.status
            });
        }
        //// May be you don't need if statement
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        });
    }

    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Установить статус'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;