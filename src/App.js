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
  const links = document.querySelectorAll('.link');

      links.forEach(link => {
          link.style.color = 'rgb( 36, 42, 29);';
      })
      
      e.target.style.background = 'rgba( 49, 78, 15, 0.45);';
  }

  return (
      <div className='navigation'>
          <Link className='link' to='/home' onClick={clickHandler}>Home</Link>
          <Link className='link' to='/twitter_post' onClick={clickHandler}>Homework 17</Link>
          <Link className='link' to='/contact_list' onClick={clickHandler}>Homework 18</Link>
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
          
      </React.Fragment>
    </Router>
  );
}

export default App;
