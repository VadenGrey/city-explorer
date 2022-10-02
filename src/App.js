import './App.css'

import React from "react";
import axios from "axios";
import Citycard from './Components/CardComp.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      errorMessage: '',
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  }

  handleSearch = async (e) => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);
      console.log(res.data[0]);
      this.setState({ location: res.data[0]})
    } catch (error) {
      console.log('ERROR');
      this.setState({ error: true});
      this.setState({ errorMessage: error.message });
    }
  }
  render() {
    return(
      <>
        <h1>City Explorer</h1>
        <input onChange={this.handleInput} placeholder='search' ></input>
        <button onClick={this.handleSearch}>explore</button>
        {this.state.error &&
          <h2>{this.state.errorMessage}</h2>
        }
        {this.state.location.place_id &&
          <Citycard locName={this.state.location.display_name} Text={`Latitude: ${this.state.location.lat} Longitude: ${this.state.location.lon}`} imgSrc={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}`}/>
        }
      </>
    )
  }
}













export default App;
