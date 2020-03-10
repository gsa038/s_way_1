import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";


const App = () => {

  let posts = [
    {id: 1, message: "Hi, how are you?", likesCounts: 15},
    {id: 2, message: "It\'s my first post", likesCounts: 20},
    {id: 3, message: "BlaBla", likesCounts: 30},
    {id: 4, message: "Lala", likesCounts: 40}
  ]
  
  let dialogs = [
    {id: 1, name: "Helen"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Andrey"},
    {id: 4, name: "Ivan"}
  ]
  
  let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your name?"},
    {id: 3, message: "My name is ..."},
    {id: 4, message: "Yet another message"}
  ]

  const ProfileAsFuncWithProps = () => <Profile posts={posts}/>

  const NewsAsFunc = () => <News/>

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path='/profile' component={ ProfileAsFuncWithProps }  />
          <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages}/> } />
          <Route path='/news  ' component={ NewsAsFunc } />
          <Route path='/music' render={ () => <Music/>} />
          <Route path='/settings' component={ () => <Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
