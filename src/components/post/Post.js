import React from 'react';

function Post({page}) {
    return (
        <ul>
            {
                page.map(page =>
                <li key={page.id}>
                <p>{page.title}</p>
                <p>---------------------</p>                             
                <p>{page.body}</p>   
                </li>
                )
            }
        </ul>
    );
}

export default Post;