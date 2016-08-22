import React from 'react';

import Header from './Header.react';
import Footer from './Footer.react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
