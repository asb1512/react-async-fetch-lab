// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  render() {
    <div>
      {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
    </div>
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => console.log(json))
  }
}

export default App