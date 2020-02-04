import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import Form from './Form'

class EditJet extends React.Component {

  state = {
    data: {
      type: '',
      manufacturer: '',
      commercial: '',
      operational: '',
      year: '',
      image: '',
      description: ''
    },
    errors: {}
  }

  async componentDidMount() {
    const jetId = this.props.match.params.id
    try {
      const { data } = await axios.get(`/api/jets/${jetId}`)
      this.setState({ data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const jetId = this.props.match.params.id
    try {
      const res = await axios.put(`/api/jets/${jetId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/jets/${res.data._id}`)
    } catch (errors) {
      this.setState({ errors: errors.response.data.errors })
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <Form
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </section>
    )
  }

}

export default EditJet