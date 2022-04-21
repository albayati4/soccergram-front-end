import React from 'react'
import { useNavigate } from 'react-router-dom'
const Profile = ({ user }) => {
  let navigate = useNavigate()

  return (
    <div>
        <h1>This is the profile page</h1>
        <h3>{user.email}</h3>
      <section>
      </section>
    </div>
  )
}

export default Profile