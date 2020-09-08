import React, { Component } from "react";
import SearchBox from "../components/SearchBox.js";
import CardList from "../components/CardList.js";
import Scroll from "../components/Scroll.js";
//import { robots } from "./robots"; // Just becuse it is not default , it has to be destructure
import ErrorBoundry from "../components/ErrorBoundry.js";
import "./App.css";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1 className='tc'>Loading...&nbsp; please &nbsp;&nbsp; wait</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearch} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
