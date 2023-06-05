import React from 'react'
import { useState } from 'react'
import { Button } from 'bootstrap'
import  '../styles/Form.css'
import '../assets/react.svg'
// import "bootstrap/scss/bootstrap"

const Form = ({ city, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
      </div>
        <button className="btn btn-primary" type="submit">
          Seach City
        </button>
    </form>
  );
};

export default Form;