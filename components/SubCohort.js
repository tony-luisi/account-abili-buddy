import React, {Component} from 'react'
import Person from './Person'

class SubCohort extends Component {
  constructor(props){
    super(props)
  }


  render(){
    var people = this.props.people
    return (
      <div className='sub-cohort'>
        <h2>{this.props.name}</h2>
        <div>
          <div className='lists'>
            {people.map(function(prsn, i){
              return <Person key={i} name={prsn} />
            })}
          </div>
          <div className='lists'>
            {people.map(function(prsn, i){
              return <Person key={i} name={prsn} />
            })}
          </div>
        </div>
      </div>
    )
  }
}




export default SubCohort
