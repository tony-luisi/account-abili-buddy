import React, {Component} from 'react'
import Person from './Person'

class SubCohort extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkedIn: this.props.checkedIn,
      checkedOut: this.props.checkedOut
    }
  }

  checkOut(name) {
    console.log("outty name: ", name)
    console.log(this.props)
    console.log(this.state)
    var tempIn = this.state.checkedIn.filter(function (each) {
      return each !== name
    })
    var tempOut = this.state.checkedOut
    tempOut.push(name)

    this.setState({checkedIn: tempIn,
                   checkedOut: tempOut
                 })
  }

  checkIn(name) {
    console.log("inny name: ", name)
    var tempOut = this.state.checkedOut.filter(function (each) {
      return each !== name
    })
    var tempIn = this.state.checkedIn
    tempIn.push(name)

    this.setState({checkedIn: tempIn,
                   checkedOut: tempOut
                 })
  }

  buildCheckedIn () {
    return this.state.checkedIn.map(function(prsn, i){
      return <Person key={i} name={prsn} isChecked={true} callback={this.checkOut} />
    }.bind(this))
  }

  buildCheckedOut () {
    return this.state.checkedOut.map(function(prsn, i){
      return <Person key={i} name={prsn}  isChecked={false} callback={this.checkIn} />
    }.bind(this))
  }

  render(){

    return (
      <div className='sub-cohort'>
        <h2>{this.props.name}</h2>

        <div className='sub-cohort-lists'>
          <div className='lists'>
            {this.buildCheckedIn()}
          </div>

          <div className='lists'>
            {this.buildCheckedOut()}
          </div>
        </div>
      </div>
    )
  }
}

export default SubCohort
