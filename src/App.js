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
import ErrorBoundary from "./components/Utils/ErrorBoundary";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.setUserInitializedThunkCreator()
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
                        <ErrorBoundary>
                        <Routes>
                            <Route path={"/"} element={ <Navigate to={'/profile'}/> }/>
                            <Route path={"/login"} element={<Login/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/news" element={<NewsContainer/>}/>
                            <Route path="/music" element={<MusicContainer/>}/>
                            <Route path="/settings" element={<SettingsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="*" element={<h2>Page not found</h2>} />
                        </Routes>
                        </ErrorBoundary>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose( withRouter, connect(mapStateToProps, {setUserInitializedThunkCreator}))(App);

export const MainApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}