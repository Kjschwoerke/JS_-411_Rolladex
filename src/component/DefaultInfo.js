import React from 'react'

class DefaultInfo extends React.Component {
    state = {
        isExpanded: true,
    }

    Expanded() {
        let isExpanded = this.state.isExpanded
        this.setState({isExpanded: !isExpanded})
      }

render(){
    {if (this.state.isExpanded){
    return (

        <section id ='userCard'>
        <img id ="userImg" src={this.props.image} alt ='someImage'></img>
        <br/>
        <span id ="userName"><h2>{this.props.firstName} {this.props.lastName}</h2></span>
        <div id ="userEmail">User Email: {this.props.email}</div>
        
        <button onClick = {() => this.Expanded()} id="expandButton">Click to expand info for "{this.props.firstName}".</button>
        </section>

      )} else if (this.state.isExpanded === false){
      return (
<>
        <section id ='userCard'>
        <img id ="userImg" src={this.props.image} alt ='someImage'></img>
        <br/>
        <span id ="userName"><h2>{this.props.firstName} {this.props.lastName}</h2></span>
        </section>
        <p id ="userEmail">User Email: {this.props.email}</p>
        <p id ="userCity">City: {this.props.city}</p>
        <p id ="userState">State: {this.props.state}</p>
        <p id ="userCountry">Country: {this.props.country}</p>
        

        <button onClick = {() => this.Expanded()} id="unExpandButton">Click to minimize info for "{this.props.firstName}".</button>
        
</>
          )}
      }
    }
}

export default DefaultInfo