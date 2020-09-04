import React, { useState } from 'react';
import { useEffect } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comments = () => {
    const [comments, setComments] = useState([])
 
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            {
                comments.map(comment => <CommentDetail comment ={comment}></CommentDetail>)
            }
        </div>
    );
};

export default Comments;