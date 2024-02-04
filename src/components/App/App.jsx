import React from 'react';
import axios from 'axios';
import './App.css';

//Importing our router
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

//Importing components for route use
import FeelingMeter from '../Feeling/Feeling';
import UnderstandingLevel from '../Understanding/Understanding';
import SupportAmount from '../Support/Support';
import CommentPage from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router >
          <Route path='/' exact>
            <FeelingMeter />
          </Route>
          <Route path='/understanding'>
            <UnderstandingLevel />
          </Route>
          <Route path='/support'>
            <SupportAmount />
          </Route>
          <Route path='/comments'>
            <CommentPage />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/thankyou'>
            <ThankYou />
          </Route>
      </Router>
    </div>
  );
}

export default App;
