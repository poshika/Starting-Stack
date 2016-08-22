import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: 'Header!'
    }
  }

  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">{this.state.msg}</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <Link to="currency">Currency</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
