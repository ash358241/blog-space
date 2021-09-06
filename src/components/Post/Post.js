import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Post.css';



const Post = ({blogData}) => {
    const {title, description, imageURL, _id} = blogData;

    const history = useHistory();
    const handleClick = (blogId) => {
        const url = `/blog/${blogId}`;
        history.push(url);
    }
    return (
        <div>
            <Card id="cardContent" onClick={() => handleClick(_id)}>
                <Card.Img variant="top" src={imageURL} style={{width: '95%', height: '200px', margin: '10px auto', objectFit: 'cover'}} />
                <Card.Body>
                    <Card.Title className="title" style={{color: '#224A49', fontSize: '30px'}}>{title}</Card.Title>
                    <Card.Text style={{fontSize: '20px'}}>
                    <p className="postDesc">{description}</p>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <br />
            <br />
        </div>
    );
};

export default Post;