import React from 'react';
import Header from './components/Header';
import Index from './page/index'
import Detail from './page/detail'
import BookRack from './page/bookRack'
import Analyse from './page/analyse'
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
      <div className="main">
        <Router>
          <Switch>
            <Route path="/index">
              <Index />
            </Route>
            <Route path="/detail/:id">
              <Detail/>
            </Route>
            <Route path="/bookRack/:userId">
              <BookRack/>
            </Route>
            <Route path="/analyse/:userId">
              <Analyse/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
