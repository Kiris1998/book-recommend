import React from 'react';
import Header from './components/Header';
import Index from './page/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.less';

function App() {
  return (
    <div className="App">
      <Header className="header"></Header>
      <Router>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
