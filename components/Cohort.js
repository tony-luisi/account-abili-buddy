import React, {Component} from 'react'
import SubCohort from './SubCohort'

class Cohort extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var subgroups = this.props.subgroups
    return (
      <div className='cohort'>
        <h1>{this.props.name}</h1>
        <div>
          {subgroups.map(function(subgroup, i){
            return <SubCohort key={i} name={subgroup.name} people={subgroup.people}/>
          })}
        </div>
      </div>
    )
  }
}




export default Cohort
