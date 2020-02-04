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
    error: {}
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
    const error = { ...this.state.error, [event.target.name]: '' }
    this.setState({ data, error })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const jetId = this.props.match.params.id
    try {
      const res = await axios.put(`api/jets/${jetId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/jets/${res.data._id}`)
    } catch (error) {
      this.setState({ errors: error.response.data.errors })
    }
  }

  render() {
    return (
      <h1>Edit Form</h1>
    )
  }

}

export default EditJet