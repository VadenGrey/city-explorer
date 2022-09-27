import React from "react";
import axios from "axios";

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
    console.log(this.state.searchQuery)
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
        <input onChange={this.handleInput} placeholder='search' ></input>
        <button onClick={this.handleSearch}>explore</button>
        {this.state.location.place_id &&
        <>
          <h2>The City is: {this.state.location.display_name}</h2>
          <h2>The lat is: {this.state.location.lat}</h2>
          <h2>The lon is: {this.state.location.lon}</h2>
        </>
        }
        {this.state.error &&
          <h2>{this.state.errorMessage}</h2>
        }
      </>
    )
  }
}













export default App;
