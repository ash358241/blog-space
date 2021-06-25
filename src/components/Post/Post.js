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
            <Card onClick={() => handleClick(_id)} style={{ width: '80%', margin: '0 auto', textAlign: 'center', backgroundColor: '#E2D9CD', border: 'none', cursor: 'pointer' }}>
                <Card.Img variant="top" src={imageURL} style={{width: '95%', height: '200px', margin: '10px auto', objectFit: 'cover'}} />
                <Card.Body>
                    <Card.Title style={{color: '#224A49', fontSize: '30px'}}>{title}</Card.Title>
                    <Card.Text style={{fontSize: '20px'}}>
                    <p className="postDesc">{description}</p>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Post;