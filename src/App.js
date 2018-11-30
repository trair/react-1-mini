import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value) {
    this.setState({
      picture: value
    })
  }

  updateName(value) {
    this.setState({
      name: value
    })
  }

  addFriend() {
    const { picture, name } = this.state;
    
    // newFriends.push({this.state.picture, this.state.name})

    let newFriends = this.state.friends.slice()

    newFriends.push({ picture, name })
 
    this.setState({
      friends: newFriends,
      picture: '',
      name: ''
    })
  }

  render() {
    const friends = this.state.friends.map((el, i) => {
      return (
        <div key={i}>
          <img height='120px' src={el.picture} alt={el.name} />
          <span>{el.name}</span>
        </div>
      )
    })

    return (
      <div>
        <label>Picture URL: </label>
        <input onChange={(evt) => this.updatePicture(evt.target.value)} value={this.state.picture} />
        <label>Name: </label>
        <input onChange={(evt) => this.updateName(evt.target.value)} value={this.state.name} />
        <button onClick={() => this.addFriend()} >Add Friend </button>
        {friends}
      </div>
    );
  }
}

export default App;
