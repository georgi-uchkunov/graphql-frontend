import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Profile from './pages/Profile';
import ProtectedPage from './pages/ProtectedPage';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>
    </>
)

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/movies',
        exact: true,
        main: () => <Layout>
            <Movies/>
        </Layout>
    },
    {
        path: '/profile',
        exact: false,
        main: () => {
            return <Layout>
            <Profile/>
        </Layout>
        }
    },
    {
        path: '/protected',
        exact: false,
        main: () => {
            return <Layout>
            <ProtectedPage/>
        </Layout>
        }
    },

]

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact} 
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
}


function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;
