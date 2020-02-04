import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  state = { navOpen: false }

  toggleNavbar = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }
 
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navOpen: false })
    } 
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Home</Link>
            <a
              className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to='/jets'>View All</Link>
              <Link className="navbar-item" to='/jets/create'>Create</Link>
              <Link className="navbar-item" to='/login'>Login</Link>
              <Link className="navbar-item" to='/register'>Register</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)