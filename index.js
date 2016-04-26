import React from 'react'
import {render} from 'react-dom'
import Cohort from './components/Cohort'
import {createStore} from 'redux'

var accountability = [
  { name: "Balcony",
    checkedOut: ["Tony",
             "Rahmona",
             "James",
             "Daniel",
             "Mahuta"
           ],
    checkedIn: []
  },
  { name: "Pizza Cats",
    checkedOut: ["Scully",
            "Ollie",
            "Vicken",
            "Sam",
            "Lucy",
            "Maxine"
          ],
    checkedIn: []
  }

]

const reducer = (state = accountability, action) => {
  switch(action.type){
    case "ADD_COHORT":
      console.log('better add cohort')
      break;
    case "CHECK_IN_PERSON": //should take a data (perhaps the cohort and the name?)
      var subcohort = state.filter((subgroup) => { return action.subcohort === subgroup.name })[0]
      var otherCohorts = state.filter((subgroup) => { return action.subcohort !== subgroup.name })
      subcohort.checkedOut = subcohort.checkedOut.filter((person) => { return person !== action.name })
      subcohort.checkedIn.push(action.name)
      otherCohorts.push(subcohort)
      otherCohorts.sort((a,b)=> { return a.name > b.name })
      state = otherCohorts
      console.log(state)
      return state
    case "CHECK_OUT_PERSON":
      var subcohort = state.filter((subgroup) => { return action.subcohort === subgroup.name })[0]
      var otherCohorts = state.filter((subgroup) => { return action.subcohort !== subgroup.name })
      subcohort.checkedIn = subcohort.checkedIn.filter((person) => { return person !== action.name })
      subcohort.checkedOut.push(action.name)
      otherCohorts.push(subcohort)
      otherCohorts.sort((a,b)=> { return a.name > b.name })
      state = otherCohorts
      return state
    default:
      console.log('better default', action.type)
      break;
  }
  return state
}
const store = createStore(reducer)


console.log("welcome to account-abili-buddy")
function renderDom(){
  render(<Cohort name="Hihi" store={store}/>, document.querySelector('main'))
}
renderDom()


store.subscribe(renderDom)
