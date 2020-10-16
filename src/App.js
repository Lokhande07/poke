import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import home from './components/home'
import contact from './components/contact'
import about from './components/about'

class App extends Component{
render() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Route exact path='/' component={home} />
    <Route path='/about' component={about} />
    <Route path='/contact' component={contact} />

    </div>
    </BrowserRouter>
  );
}
}

export default App;
