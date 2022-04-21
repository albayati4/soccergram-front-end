import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateAPost = (props) => {
    let navigate = useNavigate()
    const user_id = props.user.id

    const [formValues, setFormValues] = useState({
        title: '',
        body: '',
        user_id: user_id
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const CreatePost = async () => {
        await axios({
          url: `http://localhost:3001/api/post/${user_id}`,
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

    }

    return (
        <div className="signin col">
            <h1>Create a post page</h1>
            <div className="card-overlay centered">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
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
                    <div className="input-wrapper">
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