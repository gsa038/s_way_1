import React from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter } from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import { connect, Provider } from "react-redux";
import { initializeApp } from './redux/app-reducer';
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app-wrapper-content">
            {/* <Route path='/' render={() => <ProfileContainer />} /> */}
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/news  ' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
        </div>
      );
    };
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);


let MainApp = (props) => {
  return (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter >
)}

export default MainApp;