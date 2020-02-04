import React from 'react'


const SearchBar = ({ onChange }) => (
  <div className="columns">
    <div className="control">
      <input
        type="text"
        className="input"
        placeholder="Search by model name..."
        onChange={e => {
          const userInput = e.target.value
          onChange(userInput)
        }}
      />
    </div>
  </div>
)

export default SearchBar