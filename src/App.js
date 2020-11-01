
import './App.css';
import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {
 state = {
   textLength : 0,
   text: ''
 }
 
  textCounterHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value
    });
  
  }

  deleteCharacterHandler = (index) => {
    const textArray = this.state.text.split('');
    
    textArray.splice(index,1);

    this.setState({textLength:textArray.length, text:textArray.join('')});
  }

  render () {
    let charComponentRender = null;
    const textArray = this.state.text.split('');
    charComponentRender = (
      textArray.map((character,index) => {
      return  <CharComponent letter={character} click={this.deleteCharacterHandler.bind(this,index) }></CharComponent>;
      })
   );
    return (
      <div className="App">
      <input value={this.state.textLength}></input>
      <input onChange={(event) => {this.textCounterHandler(event)}} value={this.state.text}></input>
      <ValidationComponent textLength={this.state.textLength}></ValidationComponent>
      {charComponentRender}
      </div>
    );
  }
  
}

export default App;
