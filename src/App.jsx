import React from "react"
import "./App.css"
import News from "./components/News/News"
import ProfileContainer from './components/Profile/ProfileContainer'
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import { Route, withRouter, Switch, Redirect } from "react-router"
import NavbarContainer from "./components/Navbar/NavbarContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import LoginPage from "./components/Login/LoginContainer"
import { connect, Provider } from "react-redux"
import { initializeApp } from './redux/app-reducer'
import { getAuthUserData } from './redux/auth-reducer'
import { compose } from "redux"
import Preloader from "./components/common/Preloader/Preloader"
import { BrowserRouter } from "react-router-dom"
import store from "./redux/redux-store"
import { withSuspense } from "./hoc/withSuspense"


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {

  catchAllUnhadledErrors = (PromiseRejectionEvent) => {
    alert('Some error occured')
    // console.log(promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.getAuthUserData()
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhadledErrors)
  }

  componentWillMount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhadledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    else if (!this.props.isAuth) {
      return <LoginPage />
    }
    else {
      return (
        <div>
          <div className="app-wrapper">
            <HeaderContainer />
            <NavbarContainer />
            <div className="app-wrapper-content">
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/profile' />} />
                <Route path='/profile/:userId?'
                  render={() => <ProfileContainer />} />
                <Route exact path='/dialogs'
                  render={withSuspense(DialogsContainer)} />
                <Route exact path='/news  ' render={() => <News />} />
                <Route exact path='/music' render={() => <Music />} />
                <Route exact path='/users'
                  render={withSuspense(UsersContainer)} />
                <Route exact path='/settings' render={() => <Settings />} />
                <Route render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </div>
          </div>
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, getAuthUserData }))(App)


let MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter >
  )
}

export default MainApp