import React from 'react'

const Navbar = (params) => {
  return (
    <div>
      I am a {params.adjective} Navbar and my color is {params.color}

      <button>im {params.getAdjective()}</button>
    </div>
  )
}

export default Navbar
