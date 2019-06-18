import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import apiKey from './config.js'

import Search from './Search'
import Nav from './Nav'
import PhotoContainer from './PhotoContainer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false,
      query: "",
      imageData: []
    }
  }

  componentDidMount() {
   this.performSearch("gundam")
  }

  performSearch = (query) => {
    this.setState({loaded: false, query})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
    .then(({data}) => {
      console.log(data.photos.photo) /*REMOVE CONSOLE LOG*/
      this.setState({
        imageData: data.photos.photo,
        loaded: true
      })
    })
    .catch(error => {
      console.log("Failed to Load Image Data", error);
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="Container">
          <Search handleSearch={this.performSearch}/>
          <Nav />
          {this.state.loaded ? <PhotoContainer data={this.state.imageData} /> : <h2>Loading Images...</h2>}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
