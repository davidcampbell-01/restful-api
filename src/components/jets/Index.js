import React from 'react'
import axios from 'axios'
import JetCard from './JetCard'
import SearchBar from '../common/SearchBar'
import Unknown from '../common/Unknown'

class Index extends React.Component {

  state = {
    jets: null,
    userInput: ''
  }

  async componentDidMount() {
    try {
      const jets = await axios.get('/api/jets')
      this.setState({ jets: jets.data })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (userInput) => {
    this.setState({ userInput })
  }

  render() {
    if (!this.state.jets) return null
    const jetArray = this.state.jets.filter(jet => jet.type.toLowerCase().includes(this.state.userInput.toLowerCase()))
    return (
      <section className="section">
        <div className="container">
          <SearchBar onChange={this.handleChange} />
          <div className="columns is-mobile is-multiline">
            {jetArray.length === 0 && this.state.userInput ?
              <Unknown /> :
              jetArray.map(jet => <JetCard key={jet._id} {...jet} />)}
          </div>
        </div>
      </section>
    )
  }

}

export default Index