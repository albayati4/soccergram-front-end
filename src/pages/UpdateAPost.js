import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const UpdateAPost = (props) => {
    let navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    console.log(props)

    const UpdatePost = async () => {
        let url = process.env.NODE_ENV === 'production' ? `https://soccergram-back.herokuapp.com/api/post/${id}` : `http://localhost:3001/api/post/${id}`
        await axios.put(url, {
            title: title,
            body: body
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        UpdatePost();
        navigate('/home');
        window.location.reload(false)
    }

    return (
        <div>
            <h1>Update your post</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={(e)=>{setTitle(e.target.value)}}
                            name="title"
                            type="text"
                            placeholder="Messi scores an impossible shot"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Description</label>
                        <input
                            onChange={(e)=>{setBody(e.target.value)}}
                            name="body"
                            type="text"
                            placeholder="This goal was insane!"
                            required
                        />
                    </div>
                    <button> Enter </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateAPost