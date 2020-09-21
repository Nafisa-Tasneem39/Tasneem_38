import React, { Component } from 'react';

import{ Portfolio } from './Portfolio/Portfolio';

import './App.css';


export class App extends Component {
	constructor () {
		super();

		this.state = {
			selectedSection: "",
		};
  }
  
  handleSectionClick =  (sectionName) => {
      alert(sectionName);
  }
  render () {
    return (
      <div className="App">
         <Portfolio 
            hello="Hello"
            handleMethod={this.handleSectionClick} />
      </div>
    );
  }
}
  export default App;