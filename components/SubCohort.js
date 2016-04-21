import React, {Component} from 'react'
import Person from './Person'

class SubCohort extends Component {
  constructor(props){
    super(props)
    this.state = {
      checkedIn: this.props.checkedIn,
      checkedOut: this.props.checkedOut
    }
    this.checkOut = this.checkOut.bind(this)
    this.checkIn = this.checkIn.bind(this)
  }

  checkOut(name) {
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
    var tempOut = this.state.checkedOut.filter(function (each) {
      return each !== name
    })
    var tempIn = this.state.checkedIn
    tempIn.push(name)

    this.setState({checkedIn: tempIn,
                   checkedOut: tempOut
                 })
  }

  render(){

    return (
      <div className='sub-cohort'>
        <h2>{this.props.name}</h2>

        <div className='sub-cohort-lists'>
          <div className='lists'>
            {this.state.checkedIn.map(function(prsn, i){
              return <Person key={i} name={prsn} isChecked={true} callback={this.checkOut} />
            }, this)}
          </div>

          <div className='lists'>
            {this.state.checkedOut.map(function(prsn, i){
              return <Person key={i} name={prsn}  isChecked={false} callback={this.checkIn} />
            }, this)}
          </div>
        </div>
      </div>
    )
  }
}

export default SubCohort
