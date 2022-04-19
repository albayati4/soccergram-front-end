import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        title: '',
        image: '',
        body: ''
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreatePost({
            title: '',
            image: '',
            body: ''
        })
        setFormValues({
            title: '',
            image: '',
            body: ''
        })
        navigate('/home')

    }

    return (
        <div className="signin col">
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
                        <label htmlFor="image">Image</label>
                        <input
                            onChange={handleChange}
                            name="image"
                            type="text"
                            placeholder="Smith"
                            value={formValues.image}
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
                            !formValues.image ||
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

export default CreatePost