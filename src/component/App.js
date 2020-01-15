import React, { Component } from 'react';
import '../App.css';
import Expanded from "./DefaultInfo"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isExpanded: [],
    }
  }

  componentDidMount() {

  fetch('https://randomuser.me/api?results=25')
    .then(res => res.json())
    .then(json => {
      this.setState({
        users: json,
      })
    })
    
  }

  

render(){
    
    const {users} = this.state
    let userPeople = users
    let people = userPeople.results

    console.log(people)
    
    if (userPeople.length === 0) {
      return (<h1>Loading UserData</h1>)
    }

     return (
       <div className = "App">
         <div>The Data Is Loaded</div>
         {people.map(person => (
           <Expanded
           image={person.picture.large}
           firstName={person.name.first}
           lastName={person.name.last}
           email={person.email}
           />
            // <div>{person.name.last}</div>
         ))}
      </div>
       )
     }

}

export default App;
