import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import API_KEY from './config.js'

import Search from './Search'
import Nav from './Nav'
import PhotoContainer from './PhotoContainer'
import NotFound from './NotFound'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loaded: false,
      query: '',
      searchImages: [],
      skyImages: [],
      japanImages: [],
      mountainImages: []
    }
  }

  componentDidMount() {
   this.search('gundam', 'searchImages')
   this.search('sky', 'skyImages')
   this.search('bird', 'birdImages')
   this.search('mountain', 'mountainImages')
  }

  search = (query, target) => {
    this.setState({loaded: false, query})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(({data}) => {
      this.setState({
        loaded: true,
        [target]: data.photos.photo,
        query
      })
    })
    .catch(error => {
      console.log('Failed to Load Image Data', error);
    })
  }

  handleLoad = (data, title) => {
    return this.state.loaded ? <PhotoContainer data={data} title={title} /> : <h2>Loading Images...</h2>
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="Container">
        <Route render={props => <Search {...props} handleSearch={this.search} /> }/>
          <Nav />
          <Switch>
            <Route exact path='/'         render={() => this.handleLoad(this.state.searchImages, 'Gundam') } />
            <Route path='/sky'            render={() => this.handleLoad(this.state.skyImages, 'Sky')}/>
            <Route path='/bird'           render={() => this.handleLoad(this.state.birdImages, 'Bird')}/>
            <Route path='/mountain'       render={() => this.handleLoad(this.state.mountainImages, 'Mountain')}/>
            <Route path='/search/:query'  render={() => this.handleLoad(this.state.searchImages, this.state.query)}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
