import React, {Component} from 'react'
import Person from './Person'

class SubCohort extends Component {
  constructor(props){
    super(props)
  }

  render(){

    return (
      <div className='sub-cohort'>
        <h2>{this.props.name}</h2>

        <div className='sub-cohort-lists'>
          <div className='lists'>
            {this.props.checkedOut.map(function(prsn, i){
              return <Person key={i} name={prsn} subcohort={this.props.name} isChecked={false} store={this.props.store} />
            }, this)}
          </div>
          <div className='lists'>
            {this.props.checkedIn.map(function(prsn, i){
              return <Person key={i} name={prsn} subcohort={this.props.name} isChecked={true} store={this.props.store} />
            }, this)}
          </div>


        </div>
      </div>
    )
  }
}

export default SubCohort
