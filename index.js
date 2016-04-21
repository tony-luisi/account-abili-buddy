import React from 'react'
import {render} from 'react-dom'
import Cohort from './components/Cohort'


var accountability = [
  { name: "Pizza Cats",
    checkedOut: ["Scully",
            "Ollie",
            "Vicken",
            "Sam",
            "Lucy"
          ],
    checkedIn: ["Maxine"]
  },
  { name: "Balcony",
    checkedOut: ["Tony",
             "Rahmona",
             "James",
             "Daniel"
           ],
    checkedIn: ["Mahuta"]
  }
]



console.log("welcome to account-abili-buddy")
render(<Cohort name="Hihi" subgroups={accountability}/>, document.querySelector('main'))
