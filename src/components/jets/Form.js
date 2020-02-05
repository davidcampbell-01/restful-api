import React from 'react'

const Form = ({ data, handleChange, handleSubmit, errors }) => (

  <div className="columns">
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter card">

      <div className="field">
        <label className="label">Type</label>
        <div className="control">
          <input
            className={`input ${errors.type ? 'is-danger' : ''}`}
            placeholder="Type"
            name="type"
            onChange={handleChange}
            value={data.type}
          />
        </div>
        {errors.type && <small className="help is-danger">{errors.type}</small>}
      </div>

      <div className="field">
        <label className="label">Manufacturer</label>
        <div className="control">
          <input
            className={`input ${errors.manufacturer ? 'is-danger' : ''}`}
            placeholder="Manufacturer"
            name="manufacturer"
            onChange={handleChange}
            value={data.manufacturer}
          />
        </div>
        {errors.manufacturer && <small className="help is-danger">{errors.manufacturer}</small>}
      </div>

      <div className="field">
        <label className="label">Commercial</label>
        <div className="control">
          <select onChange={handleChange} name="commercial" value={data.commercial}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {errors.commercial && <small className="help is-danger">{errors.commercial}</small>}
      </div>

      <div className="field">
        <label className="label">Operational</label>
        <div className="control">
          <select onChange={handleChange} name="operational" value={data.operational}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {errors.operational && <small className="help is-danger">{errors.operational}</small>}
      </div>

      <div className="field">
        <label className="label">Year</label>
        <div className="control">
          <input
            className={`input ${errors.year ? 'is-danger' : ''}`}
            placeholder="Year"
            name="year"
            onChange={handleChange}
            value={data.year}
          />
        </div>
        {errors.year && <small className="help is-danger">{errors.year}</small>}
      </div>

      <div className="field">
        <label className="label">Image URL</label>
        <div className="control">
          <input
            className={`input ${errors.image ? 'is-danger' : ''}`}
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
        {errors.image && <small className="help is-danger">{errors.image}</small>}
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={data.description}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button type="submit" className="button is-warning is-fullwidth">Submit</button>
        </div>
      </div>
    </form>
  </div>
)

export default Form