import React from 'react'
import { Link } from 'react-router-dom'

const JetCard = ({ type, image, _id }) => (

  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/jets/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{type}</h4>
        </div>
        <div className="card-image">
          <figure className="image is-3by2">
            <img src={image} alt={type} />
          </figure>
        </div>
      </div>
    </Link>
  </div>
)

export default JetCard