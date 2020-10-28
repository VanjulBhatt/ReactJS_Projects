import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {

  state = {
    userName : 'Matt'
  };

  nameChangeHandler = (event) => {
    this.setState({
      userName : event.target.value
    }); 
  }
  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.userName}></UserOutput>
        <UserOutput name="Jason"></UserOutput>
        <UserInput changeHandler={this.nameChangeHandler} name={this.state.userName}></UserInput>
      </div>
    )
    }
  
}

export default App;
