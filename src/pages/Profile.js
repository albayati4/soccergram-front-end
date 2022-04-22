import React from 'react'
import axios from 'axios'
import DeleteAPost from '../components/DeleteAPost'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Profile = ({ user }) => {
  const [posts, setPosts] = useState([])
  const user_id = user.id;
  const location = useLocation()

  useEffect(() => {
    let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api/post/${user_id}` : `https://soccergram-back.herokuapp.com/api/post/${user_id}`
    const GetUserPosts = async () => {
      const info = await axios.get(url)
      setPosts(info.data)
    }
    GetUserPosts()
  }, [])

  return (
    <div>
      <h1>This is the profile page</h1>
      <h3>{user.email}</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 80)}</p>
          <p>{post.user_id}</p>
          <DeleteAPost postId={post.id} />
          <Link to={`/${post.id}`} state={{ id: post.id }}><button> Update Post </button></Link>
        </div>
      ))}
      <section>
      </section>
    </div>
  )
}

export default Profile