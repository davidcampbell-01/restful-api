import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import notification from '../../lib/notification'

class Login extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
      notification(res.data.message)
      this.props.history.push('/jets')
    } catch (err) {
      this.setState({ error: 'Wrong Username/Password Combination' })
    }
  }

  render() {
    return (
      <section>
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <h2>Login</h2>
              <div>
                <label>Email</label>
                <div>
                  <input
                    className={`input ${this.state.error} ? : 'is-danger' : '' `}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div>
                  <input
                    className={`input ${this.state.error} ? : 'is-danger' : '' `}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.error && <small className="help is-danger">{this.state.error}</small>}
              </div>
              <button type="submit" className="button is-warning is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </section>
    )
  }


}

export default Login