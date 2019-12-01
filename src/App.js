import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {


state = {
  persons:[
    { name: 'Mark', age:25},
    { name: 'Jhon', age:24},
    { name: 'Stepani', age:23},
  ],
  otherState : 'Some other Valu'
}

switchNameHandler = () => {
  this.setState(
    {
      persons : [
        { name: 'Tusher', age: 28 },
        { name: 'Opu', age: 29 },
        { name: 'Shahed', age: 25 },
      ]
    }
  )
}

nameChangedHandler = (event) => {
  this.setState(
    {
      persons : [
        { name: 'Tusher', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Shahed', age: 25 },
      ]
    }
  )
}

  render() {
      const style = {
        backgroundColor: 'red',
        border: '5px solid blue',
        padding:'8px',
        cursor: 'pointer',

      };
    return(
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style={style}
        onClick= {this.switchNameHandler}>Switch Name
        </button>
        <Person  name ={ this.state.persons[0].name} age = { this.state.persons[0].age} />
        <Person
        name ={ this.state.persons[1].name}
        age = { this.state.persons[1].age}
        click = { this.switchNameHandler.bind(this, 'MarkJE')}
        changed = {this.nameChangedHandler} > My Hobbies: Cacino </Person>

        <Person  name ={ this.state.persons[2].name} age = { this.state.persons[2].age} />

        <UserInput />

        <UserOutput userName='Mark' />
        <UserOutput userName='Mark' />
        <UserOutput userName='Mark' />


       </div>
    );

  // return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
 }}

export default App;
