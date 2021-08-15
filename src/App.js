import React from 'react';
import Post from './homework17/hw17';
import ContactList from './homework18/hw18';
import SPA from './homework20/hw20';
//https://reactrouter.com/web/guides/quick-start
//https://www.youtube.com/watch?v=xMNhDf5-hvk
// React Router for multiple pages aka multiple homeworks
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';


function Links() {
  const clickHandler = (e) => {
  const links = document.querySelectorAll('.link');

      links.forEach(link => {
          link.style.color = 'rgb( 36, 42, 29);';
      })
      
      e.target.style.background = 'rgba( 49, 78, 15, 0.45);';
  }

  return (
      <div className='navigation'>
          <NavLink className='link' to='/home' onClick={clickHandler} activeClassName={"selected"}>Home</NavLink>
          <NavLink className='link' to='/twitter_post' onClick={clickHandler} activeClassName={"selected"}>Homework 17</NavLink>
          <NavLink className='link' to='/contact_list' onClick={clickHandler} activeClassName={"selected"}>Homework 18</NavLink>
          <NavLink className='link' to='/spa/home' onClick={clickHandler} activeClassName={"selected"}>Homework 20</NavLink>
      </div>
  )
}

function App() {
  return (
    <Router>
      <React.Fragment>
        <Links />
          
            {/* <Route path='/' /> */}
            <Route path='/twitter_post' component={Post}/>
            <Route path='/contact_list' component={ContactList}/>
            <Route path='/spa/home' component={SPA}/>
          
      </React.Fragment>
    </Router>
  );
}

export default App;
