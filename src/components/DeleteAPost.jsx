import React from 'react'
import axios from 'axios'

const DeleteAPost = (props) => {

    const deletePost = async () => {
        await axios.delete(`http://localhost:3001/api/post/${props.postId}`);
    }

    const handleDelete = () => {
        deletePost();
        window.location.reload(false)
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}

export default DeleteAPost