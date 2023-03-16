import React from "react";
import './App.css'
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Login from "./components/Login/Login";
import {setUserInitializedThunkCreator} from "./Redux/app-reducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./Redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.setUserInitializedThunkCreator()
    }

    render() {
        if (this.props.initialized) {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={"/login"} element={<Login/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/news" element={<NewsContainer/>}/>
                            <Route path="/music" element={<MusicContainer/>}/>
                            <Route path="/settings" element={<SettingsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose(withRouter, connect(mapStateToProps, {setUserInitializedThunkCreator}))(App);

export const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}