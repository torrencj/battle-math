import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Battle_Wrapper from './Battle_Wrapper';
import Main from './Main';
import Login from './Login';
import Create from './Create';
import NoMatch from './NoMatch';
import './App.css';

class App extends Component {
  state = {
    me: {
      name: "Zed",
      level: 1,
      experience: 0,
      abilities: [],
      items: [],
      maxHP: 20,
      img:"/images/Finn.png",
      HP: 12,
      maxHP: 12
    },
  };

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} character={this.state.me}/>
          <Route exact path="/new_character" component={Create} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  };
};

export default App;
