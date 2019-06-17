import React, { Component } from 'react';

import Search from './Search'
import Nav from './Nav'
import Gallery from './Gallery'

class App extends Component {
  
  state = {
    test: "adjaidd"
  }
  
  render() {
    console.log(this.state.test)
    return (
      <div className="Container">
          <Search />
          <Nav />
          <Gallery />
      </div>
    )
  }
}

export default App;
