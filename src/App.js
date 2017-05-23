import React, { Component } from 'react';
import Header from './Header'
import Article from './Article'
import Ad from './Ad'
import AroundtheRealm from './AroundtheRealm'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <main className="expanded row">
            <Article />
            <Ad />
            <AroundtheRealm />
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;