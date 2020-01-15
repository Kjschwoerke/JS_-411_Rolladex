import React from 'react'

class DefaultInfo extends React.Component {
    state = {
        isExpanded: true,
        Expanded: 'No'
    }

    Expanded() {
        let isExpanded = this.state.isExpanded
        this.setState({isExpanded: !isExpanded})
        // if (isExpanded) {
        // this.setState({Expanded: 'Yes'}) 
        // }else{this.setState({Expanded: 'No'})}
      }

render(){
    {if (this.state.isExpanded){
    return (
        <li id ='userCard' key = {this.props.id}>
        <img id ="userImg" src={this.props.image}></img>
        <br/>
        <span id ="userName">{this.props.firstName} {this.props.lastName}</span>
        <br/>
        <div id ="userEmail">{this.props.email}</div>
        
        <button onClick = {() => this.Expanded()} id="expandButton">Click to expand info for "{this.props.firstName}".</button>
        </li>
      )} else if (this.state.isExpanded === false){
          return (
            <li id ='userCard' key = {this.props.id}>
            <img id ="userImg" src={this.props.image}></img>
            <br/>
            <span id ="userName">{this.props.firstName} {this.props.lastName}</span>
            <br/>
            <div id ="userEmail">{this.props.email}</div>
            <div>and some additional stuff</div>
            <button onClick = {() => this.Expanded()} id="unExpandButton">Click to minimize info for "{this.props.firstName}".</button>
            </li>
          )}
      }
    }
}

export default DefaultInfo