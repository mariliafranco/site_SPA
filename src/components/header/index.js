import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaHome, FaLaptopCode } from 'react-icons/fa'

function Header() {
  return (
    <nav>
      <Link to="/">
        <FaHome />
        Home
      </Link>
      <Link to="/contato">
        <FaEnvelope />
        Contato
      </Link>
      <Link to="/portfolio">
        <FaLaptopCode />
        Portfolio
        </Link>
    </nav>
  )
}

export default Header