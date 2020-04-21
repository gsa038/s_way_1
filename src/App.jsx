import React from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter } from "react-router";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import { connect, Provider } from "react-redux";
import { initializeApp } from './redux/app-reducer';
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { HashRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
        <div>
          <Route path='/login' render={() => <LoginPage />} />
          <div className="app-wrapper">
            <HeaderContainer />
            <NavbarContainer />
            <div className="app-wrapper-content">
              <Route path='/profile/:userId?' 
                      render={withSuspense(ProfileContainer)} />
              <Route path='/dialogs' 
                      render={withSuspense(DialogsContainer)} />
              <Route path='/news  ' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/users' 
                      render={withSuspense(UsersContainer)} />
              <Route path='/settings' render={() => <Settings />} />
            </div>
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
  <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter >
)}

export default MainApp;