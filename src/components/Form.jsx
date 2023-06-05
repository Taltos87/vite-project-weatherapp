import React from 'react'
import { useState } from 'react'
import { Button } from 'bootstrap'
import  '../styles/Form.css'
import '../assets/react.svg'
// import "bootstrap/scss/bootstrap"

export default function Form(props) {
  return ( 
  <form>
    <div className="search">
      <input type="search" placeholder="Enter a city" />
      <input type="submit" value="Search" />
    </div>
  </form>
  )

}