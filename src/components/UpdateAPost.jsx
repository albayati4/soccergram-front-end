import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateAPost = (props) => {
    let navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')



    const UpdatePost = async () => {
        await axios.put(`http://localhost:3001/api/post/${props.postId}`, {
            title: title,
            body: body,
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        UpdatePost()
        navigate('/home')
    }

    return (
        <div>
            <h2>Update Your post</h2>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" title="title" onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" />
                <input className="input" type="text" title="title" onChange={(e) => { setBody(e.target.value) }} placeholder="Body" />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UpdateAPost