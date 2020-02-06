import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class ViewJet extends React.Component {

  state = {
    data: {},
    text: '',
    errors: {}
  }

  async componentDidMount() {
    const jetId = this.props.match.params.id
    try {
      const { data } = await axios.get(`/api/jets/${jetId}`)
      // console.log(jetId)
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

  handleDeleteComment = async (e) => {
    e.preventDefault()
    const jetId = this.props.match.params.id
    const commId = e.target.name
    console.log(commId)
    try {
      await axios.delete(`/api/jets/${jetId}/comments/${commId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err)
    }
    this.componentDidMount()
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const jetId = this.props.match.params.id
    try {
      await axios.post(`/api/jets/${jetId}/comments`, { text: this.state.text }, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ text: '' })
    } catch (errors) {
      this.setState({ errors: errors.response.data.errors })
    }
    this.componentDidMount()
  }

  handleChange = e => {
    const text = e.target.value
    this.setState({ text })
  }

  isOwner = () => {
    return Auth.getPayload().sub === this.state.jet.user
  }

  render() {
    if (!this.state.jet) return null
    const { jet, text } = this.state
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-dark">{jet.type}</h2>
          <h3 className="title is-3 has-text-dark">{jet.manufacturer}</h3>
          <div className="columns">
            <div className="column is-half">
              <figure className="image is-3by2">
                <img src={jet.image} alt={jet.type} />
              </figure>

              <hr />

              <h4 className="title is-4 has-text-dark"><b>Comments:</b></h4>

              <div className="comments">
                <ul className="is-7 has-text-dark">{jet.comments.map(comment => (
                  <li key={comment._id}>
                    {comment.text}
                    <button onClick={this.handleDeleteComment} name={comment._id} type="submit" className="button is-danger delete-button">Delete</button>
                  </li>))}
                </ul>
              </div>

            </div>

            <div className="column is-half">
              <h4 className="title is-4 has-text-dark">Commercial: {(jet.commercial ? 'Yes' : 'No')}</h4>
              <h4 className="title is-4 has-text-dark">Operational: {(jet.operational ? 'Yes' : 'No')}</h4>
              <h4 className="title is-4 has-text-dark">Year: {jet.year}</h4>
              <h5 className="title is-5 has-text-dark">{jet.description}</h5>

              <hr />

              {Auth.isAuthenticated() && <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Comment</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Add a comment"
                      onChange={this.handleChange}
                      value={text}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-warning is-fullwidth">Add</button>
                  </div>
                </div>
              </form>}


              <hr />

              {this.isOwner() &&
                <div className="column">
                  <Link to={`/jets/${jet._id}/edit`} className="button is-warning edit-button">Edit</Link>
                  <button onClick={this.handleDelete} className="button is-danger delete-button">Delete</button>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default ViewJet