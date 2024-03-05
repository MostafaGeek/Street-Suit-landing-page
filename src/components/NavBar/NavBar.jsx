import React from 'react'
import logoImg from "../../assets/Logo.png"
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className='lg:container mx-auto px-4 '>
        <div className="logo">
            <img src={logoImg} alt="" />
        </div>
        <ul className='hidden md:flex gap-2 lg:gap-10'>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Quizzes</a></li>
            <li><a href="">Leaderboard</a></li>
        </ul>
        <div className="AuthButtons">
            <button className='logIn'>Log In</button>
            <button className='signUp'>Sign Up</button>
        </div>
    </nav>
  )
}

export default NavBar