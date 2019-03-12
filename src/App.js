import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/header';
import Home from'./containers/home';
import Upload from './containers/upload';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route path='/' component={ Header } />
          <div className='container mt-5'>
            <Route path='/' exact component={ Home } />
            <Route path='/upload' exact component={ Upload } />
          </div>
        </>
      </HashRouter>
    );
  }
}

export default App;
