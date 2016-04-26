import React, {Component} from 'react'

class Person extends Component {
  constructor(props){
    super(props)
  }

  clicky () {
    var store = this.props.store
    if(this.props.isChecked){
      store.dispatch({ type: 'CHECK_OUT_PERSON' , name: this.props.name, subcohort: this.props.subcohort })
    } else {
      store.dispatch({ type: 'CHECK_IN_PERSON', name: this.props.name, subcohort: this.props.subcohort  })
    }
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
