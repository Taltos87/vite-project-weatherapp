import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap'
import  '../styles/Form.css'
import '../assets/react.svg'


const Form = ({ city, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-9">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Search City
        </button>
      </div>
    </form>
  );
};

export default Form;