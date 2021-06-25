import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Post = ({blogData}) => {
    const {title, description, imageURL} = blogData;
    return (
        <div>
            <Card style={{ width: '25rem', textAlign: 'center', backgroundColor: '#E2D9CD', border: 'none' }}>
                <Card.Img variant="top" src={imageURL} style={{width: '95%', margin: '10px auto'}} />
                <Card.Body>
                    <Card.Title style={{color: '#224A49', fontSize: '30px'}}>{title}</Card.Title>
                    <Card.Text style={{fontSize: '20px'}}>
                    <p>{description}</p>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Post;