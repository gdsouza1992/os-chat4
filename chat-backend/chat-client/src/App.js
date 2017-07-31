import React, { Component } from 'react';
import './App.css';
import Chat1 from './Chat1';
import Chat2 from './Chat2';
import Home from './Home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'


class App extends Component {
  state = {users: {}}

  componentDidMount() {
    fetch('/users/asdf')
      .then(res => res.json())
      .then(users => {
          this.setState({ users })
        }
      );
  }

  render() {
    return (
      <div>
          TEST
          <BrowserRouter>
            <div>
              <Route path="/" component={Home} />
              <Route path="/messages" component={Chat1} />
              <Route path="/messages/room/:roomId" component={Chat1} />
              <Route path="/messages/dm/:recipientId" component={Chat2} />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;