import React from "react";
import './App.css'
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Login from "./components/Login/Login";
import {setUserInitializedThunkCreator} from "./Redux/app-reducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "./Redux/redux-store";
import Preloader from "./components/Preloader/Preloader";

// TODO
class ErrorBoundary extends React.Component {
    render() {
        return <div> Oops! Something went wrong. </div>
    }
}


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    catchAllUnhandledErrors = () => {
        debugger
        return (<Navigate to={'/error'}/>)
    }


    componentDidMount() {
        this.props.setUserInitializedThunkCreator()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path={"/"} element={<Navigate to={'/profile'}/>}/>
                            <Route path={"/login"} element={<Login/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/news" element={<NewsContainer/>}/>
                            <Route path="/music" element={<MusicContainer/>}/>
                            <Route path="/error" element={<ErrorBoundary/>}/>
                            <Route path="/settings" element={<SettingsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="*" element={<h2>Page not found</h2>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose(withRouter, connect(mapStateToProps, {setUserInitializedThunkCreator}))(App);

export const MainApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

