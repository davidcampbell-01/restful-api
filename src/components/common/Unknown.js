import React from 'react'
import Background from '../../assets/hero-error.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}

const Unknown = () => (
  <section style={sectionStyle} className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <p className="subtitle is-2 has-text-white-bis has-text-centered">
          <b>Error: Page Not Found</b>
        </p>
      </div>
    </div>
  </section>
)

export default Unknown