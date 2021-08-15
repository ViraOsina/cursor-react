import React from 'react';
import './hw20.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import Photos from './components/photos';
import Contacts from './components/contacts';


const SPA = () => {
    return (
        <div className="container_hw20">
            <nav className="navigation_hw20">
                <NavLink className = "nav_link" to='/spa/home' activeClassName={"selected"}>Start</NavLink>
                <NavLink className = "nav_link" to='/spa/posts' activeClassName={"selected"}>Posts</NavLink>
                <NavLink className = "nav_link" to='/spa/photos' activeClassName={"selected"}>Photo galery</NavLink>
                <NavLink className = "nav_link" to='/spa/contacts' activeClassName={"selected"}>List of contacts</NavLink>
            </nav>
            <Switch>
                <Route path='/spa/home' component={Home}/>
                <Route path='/spa/posts' component={Posts}/>
                <Route path='/spa/photos' component={Photos}/>
                <Route path='/spa/contacts' component={Contacts}/>

            </Switch>
        </div>
    )
}

export default SPA;