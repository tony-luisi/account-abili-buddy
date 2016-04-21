import React, {Component} from 'react'

class Person extends Component {
  constructor(props){
    super(props)
  }

  clicky () {
    console.log("clicked!!", this.props.name)
    this.props.callback(this.props.name)
  }

  render(){
    var checkIn = this.props.isChecked ? "True" : "False"
    return (
      <div onClick={this.clicky.bind(this)}>
        <h3>Name: {this.props.name}</h3>
      <p>Checked In? {checkIn}</p>
      </div>
    )
  }
}




export default Person
