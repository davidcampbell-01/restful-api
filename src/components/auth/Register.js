import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  state = {
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('/api/register', this.state.data)
      this.props.history.push('/login')
    } catch (err) {
      this.setState({ error: err.response.data.errors })
    }
  }

  render() {
    return (
      <h1>Register Page</h1>
    )
  }

}

export default Register