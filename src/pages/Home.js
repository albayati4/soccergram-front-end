import React from 'react'
import DeleteAPost from '../components/DeleteAPost'
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
      console.log(data)
      console.log(posts.user_id)
    }
    handlePosts()
  }, [])

  return (user && authenticated) ? (
    <div>
      <h1>This is the Home Page</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 80)}</p>
            <p>{post.user_id}</p>
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