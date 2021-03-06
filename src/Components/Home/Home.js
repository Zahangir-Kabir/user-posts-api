import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Posts from '../Posts/Posts';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { borders } from '@material-ui/system';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            {
                posts.map(post => <Posts post ={post}></Posts>)
            }
        </div>
    );
};

export default Home;