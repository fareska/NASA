import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home.js'
import Search from './components/Search.js'
import Favorites from './components/Favorites.js'
import NavBar from './components/NavBar.js'



function App() {
  return (
    <div className="App">
      <Router>
        <div id='navBar'>
          <NavBar />
        </div>

        <div id='container'>
          <Route path='/' exact render={() => <Home  />} />
          <Route path='/home' exact render={() => <Home  />} />
          <Route path='/search' exact render={() => <Search   />} />
          <Route path='/favorites' exact render={() => <Favorites />} />
          <Route path='/favorite/:id' exact render={({match}) => <Favorites match={match}  />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
