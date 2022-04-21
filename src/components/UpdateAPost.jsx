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
        UpdatePost();
        navigate('/home')
    }

    return (
        <div>
            <h1>Create a post page</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={handleChange}
                            name="title"
                            type="text"
                            placeholder="Messi scores an impossible shot"
                            value={formValues.title}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Description</label>
                        <input
                            onChange={handleChange}
                            name="body"
                            type="text"
                            placeholder="This goal was insane!"
                            value={formValues.body}
                            required
                        />
                    </div>
                    <button
                        disabled={
                            !formValues.title ||
                            !formValues.body
                        }
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateAPost