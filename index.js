import React from 'react'
import {render} from 'react-dom'
import Cohort from './components/Cohort'


var accountability = [ {name: "Pizza Cats", people: ["Scully", "Ollie", "Vicken", "Sam", "Maxine", "Lucy"]}, {name: "Balcony", people: ["Tony", "Rahmona", "James", "Mahuta", "Daniel"]}]



console.log("welcome to account-abili-buddy")
render(<Cohort name="Hihi" subgroups={accountability}/>, document.querySelector('main'))
