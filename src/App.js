import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    console.log(props)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" render={ () => <Dialogs/>}/>
                        <Route path="/profile" render={ (props) => <Profile postsData={props.postsData}/>}/>
                        <Route path="/news" render={ () => <News/>}/>
                        <Route path="/music" render={ () => <Music/>}/>
                        <Route path="/settings" render={ () => <Settings/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;
