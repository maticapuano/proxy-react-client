import React from 'react';
import AppLayout from './layout/AppLayout';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={AppLayout} />
    </Router>
  );
}

export default App;
