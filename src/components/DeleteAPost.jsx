import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DeleteAPost = (props) => {
    let navigate = useNavigate()

    const DeletePost = async () => {
        await axios.delete(`http://localhost:3001/api/post/${props.postId}`);
    }

    const handleDelete = () => {
        DeletePost();
        navigate('/home');
        window.location.reload(false)
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}

export default DeleteAPost