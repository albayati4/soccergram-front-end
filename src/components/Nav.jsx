import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Hi {user.email}!</h3>
        <Link to = "/home"> Home </Link>
        <Link to = "/create_post"> Create a Post</Link>
        <Link to = {`/profile/${user.id}`}> My Profile </Link>
        <Link onClick = {handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to = "/home"> Home </Link>
      <Link to = "/register"> Sign Up </Link>
      <Link to = "/signin"> Sign In </Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper">
          <img
            className="logo"
            src="https://i.ibb.co/cFtkfL1/logo.png"
            alt="soccergram logo"
          />
        </div>
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav