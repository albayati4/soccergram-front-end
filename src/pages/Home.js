import React from 'react'
import { useEffect, useState } from 'react'
import { GetPosts } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const data = await GetPosts()
      setPosts(data)
    }
    handlePosts()
  }, [])

  return (user && authenticated) ? (
    <div>
      <h1>This is the Home Page</h1>
      <div className="grid col-4">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <div>
              <img src={post.image} alt="post" />
            </div>
            <p>{post.body.substring(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Home