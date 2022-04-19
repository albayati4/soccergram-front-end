import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  let navigate = useNavigate()

  return (
    <div className='landing-container'>
        <img src = 'https://i.ibb.co/q7hhDJS/Screen-Shot-2022-04-18-at-12-32-59-PM.png' />
        <h1>This is the Landing Page</h1>
      <section>
        <button onClick={() => navigate('/signin')}>
          Continue by Logging in.
        </button>
      </section>
    </div>
  )
}

export default Landing