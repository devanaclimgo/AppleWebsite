import { appleImg } from '../utils'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt='Apple' width={14} height={18} />
      </nav>
    </header>
  )
}

export default Navbar