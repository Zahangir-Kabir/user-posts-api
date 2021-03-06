import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



const Posts = (props) => {
    const {userId, id, title} = props.post;
    return (
        <div style={{border: '1px solid gray', margin:'20px', padding:'20px', borderRadius:'20px'}}>
        
            <h3>Post Id : {id} </h3>
            <h2>Post Title : {title}</h2>
            <Link to={`/post/${id}`} style={{textDecoration:'none'}}><Button variant="contained" color="Primary">Show Detail</Button></Link>

        </div>
    );
};

export default Posts;