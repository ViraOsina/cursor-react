import React from 'react';
import Post from './homework17/hw17';
import ContactList from './homework18/hw18';
//https://reactrouter.com/web/guides/quick-start
//https://www.youtube.com/watch?v=xMNhDf5-hvk
// React Router for multiple pages aka multiple homeworks
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

function Links() {
  const clickHandler = (e) => {
  const links = document.querySelectorAll('.main_link');

      links.forEach(link => {
          link.style.color = 'rgb(209, 209, 209)';
      })
      
      e.target.style.color = 'rgb(33, 219, 243)';
  }

  return (
      <div className='nav_links'>
          <Link className='main_link' to='/home' onClick={clickHandler}>Home</Link>
          <Link className='main_link' to='/load' onClick={clickHandler}>Homework 17</Link>
          <Link className='main_link' to='/contracts' onClick={clickHandler}>Homework 18</Link>
      </div>
  )
}

function App() {
  return (
    <Router>
      <React.Fragment>
        <Links />
          <div id="content">
            {/* <Route path='/' /> */}
            <Route path='/load' component={Post}/>
            <Route path='/contracts' component={ContactList}/>
          </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
