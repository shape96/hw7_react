import React, { useEffect, useState } from 'react';
import Post from '../../components/post/Post';


function PostPage(props) {
    const [postPage, setPostPage] = useState([])

    const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(data => setPostPage(data))

    }
    useEffect(() => {
        getPosts()
    },[postPage])

    return (
        <>
         <button onClick={getPosts}></button>
        {
            <Post page ={postPage}/>
        }
        </>
    );
}

export default PostPage;