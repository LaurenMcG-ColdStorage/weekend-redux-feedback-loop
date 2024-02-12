import React from 'react';
import axios from 'axios';
import './App.css';

//Importing our router
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom'

//Importing components for route use
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thank from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router >
          <Route exact path='/'>
            <Feeling />
          </Route>
          <Route path='/understanding'>
            <Understanding />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/thank'>
            <Thank  />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
      </Router>
    </div>
  );
}

export default App;
