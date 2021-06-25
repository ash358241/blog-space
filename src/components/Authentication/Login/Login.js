import React from 'react';
import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
// import firebase from "firebase/app";
import firebase from "firebase/app";
import firebaseConfig from "../Login/firebase.config"
import "firebase/auth";
import { UserContext } from '../../../App';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: 'false',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }

    const handleBlur = (e) => {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(newUser)
    }

    const handleSubmit = (e) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.isSignedIn = true;
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.push(from);
                console.log(newUserInfo);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        e.preventDefault();
    }

    return (
        <div className="logDiv">
            <h1 className="text-center py-3">Login to procedure</h1>
            <Form style={{width: '80%', margin: '0 auto'}} onSubmit={handleSubmit} className='form-container'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" onBlur={handleBlur} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" onBlur={handleBlur} />
                </Form.Group>
                <br />
                <Button variant="info" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Login;