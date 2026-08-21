import React from 'react'
import "../Narbar.css"

const Navbar = (proms) => {
  return (
    <>
      <nav>
        <ul>
            <li>{proms.title}</li>
            <li>{proms.desc}</li>
            <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
