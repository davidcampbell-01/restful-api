import React from 'react'
import axios from 'axios'
import JetCard from './JetCard'

class Index extends React.Component {

  state = {
    jets: null
  }

  async componentDidMount() {
    try {
      const jets = await axios.get('/api/jets')
      console.log(jets.data)
      this.setState({ jets: jets.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (!this.state.jets) return null
    return (
      <section className="section episode-index">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.jets.map(jet => <JetCard key={jet._id} {...jet} />)}
          </div>
        </div>
      </section>
    )
  }

}

export default Index