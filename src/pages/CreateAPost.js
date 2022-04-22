import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateAPost = ({user}) => {
    let navigate = useNavigate()
    const user_id = user.id

    const [formValues, setFormValues] = useState({
        title: '',
        body: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const CreatePost = async () => {
        let url = process.env.NODE_ENV === 'production' ? `https://soccergram-back.herokuapp.com/api/post/${user_id}` : `http://localhost:3001/api/post/${user_id}`
        await axios({
          url,
          method: 'post',
          data: formValues
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        CreatePost()
        setFormValues({
            title: '',
            body: ''
        })
        navigate('/home')
        window.location.reload(false)
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

export default CreateAPost