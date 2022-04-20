import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    let navigate = useNavigate()

    return (
        <div className='landing-container'>
            <div>
                <img className='landing-background' src='https://i.ibb.co/q7hhDJS/Screen-Shot-2022-04-18-at-12-32-59-PM.png' alt='soccergram landing background image' />
            </div>
            <section className='title'>
                <h1>Welcome to SoccerGram</h1>
                <h1>A place for all your soccer needs</h1>
                <button onClick={() => navigate('/signin')}>
                    Continue by Logging in.
                </button>
                <img src='output-onlinegiftools.gif' alt='kicking ball animation' />
            </section>
        </div>
    )
}

export default Landing