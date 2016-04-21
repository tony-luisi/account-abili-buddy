import React, {Component} from 'react'

class Person extends Component {
  constructor(props){
    super(props)
    this.state = {checkedIn: false}
  }
  checkIn(){
    this.setState({checkedIn: !this.state.checkedIn })
  }

  render(){
    var checkIn = this.state.checkedIn ? "True" : "False"
    return (
      <div onClick={this.checkIn.bind(this)}>
        <h3>Name: {this.props.name}</h3>
      <p>Checked In? {checkIn}</p>
      </div>
    )
  }
}




export default Person
