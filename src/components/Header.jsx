import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div>
      <h1>Car Dealership</h1>
      <Link to="/">Home</Link> | <Link to="/newcar">Create a Car</Link> | <Link to="/admin">Admin</Link> | <Link to="/aboutus">About Us</Link>
    </div>
  )
}

export default Header
