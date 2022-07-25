//name: firstname and lastname
//state of origin
//stack
//Description < 40 characters

import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <p>
        <span className="label">First Name:</span>
        <span>{props.name}</span>
      </p>

      <p>
        <span className="label">State of Origin:</span>
        <span>{props.state}</span>
      </p>
      <p>
        <span className="label">Stack:</span>
        <span>{props.description}</span>
      </p>
      <p>
        <span className="label">Stack:</span>
        <span>{props.stack}</span>
      </p>
      <p>
        <span className="label">Job Title:</span>
        <span>{props.jobTitle}</span>
      </p>
    </div>
  )
}

export default Card
