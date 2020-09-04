import React from 'react';
import img from '../img/userPic.png'


const CommentDetail = (props) => {
    const {id, name,email, body} = props.comment;
    return (
        <div style={{borderBottom: '1px solid gray', margin:'20px', padding:'20px'}}>
            <h3> Commented Id: {id}</h3>
            <h4>Comented Name: {name}  <img src={img} alt="" style ={{width:'80px', height: '80px',float:'right'}}/></h4>
            <p>Email : {email}</p>
            <p>Body : {body}</p>
            
        </div>
    );
};

export default CommentDetail;