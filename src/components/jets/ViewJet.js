import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class ViewJet extends React.Component {

  state = { jet: null }

  async componentDidMount() {
    const jetId = this.props.match.params.id
    try {
      const { data } = await axios.get(`/api/jets/${jetId}`)
      console.log(jetId)
      this.setState({ jet: data })
    } catch (error) {
      this.props.history.push('/unknown')
    }
  }

  handleDelete = async () => {
    const jetId = this.props.match.params.id
    try {
      await axios.delete(`/api/jets/${jetId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/jets')
    } catch (err) {
      this.props.history.push('/unknown')
    }
  }

  isOwner = () => {
    console.log(this.state.jet.user)
    return Auth.getPayload().sub === this.state.jet.user
  }

  render() {
    if (!this.state.jet) return null
    const { jet } = this.state
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-dark">{jet.type}</h2>
          <h3 className="title is-3 has-text-dark">{jet.manufacturer}</h3>
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={jet.image} alt={jet.type} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4 has-text-dark">Commercial: {(jet.commercial ? 'Yes' : 'No')}</h4>
              <h4 className="title is-4 has-text-dark">Operational: {(jet.operational ? 'Yes' : 'No')}</h4>
              <h4 className="title is-4 has-text-dark">Year: {jet.year}</h4>
              <h5 className="title is-5 has-text-dark">{jet.description}</h5>
              <hr />
              {this.isOwner() &&
                <>
                  <Link to={`/jets/${jet._id}/edit`} className="button is-warning">
                    Edit
                  </Link>
                  <button onClick={this.handleDelete} className="button is-danger">Delete</button>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default ViewJet