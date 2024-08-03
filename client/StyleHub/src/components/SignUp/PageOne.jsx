import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePlaceholder from '../../../assets/icons/profile.png'

function PageOne({ user, setUser, next }) {
    const inputRef = useRef(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSignUp = () => {
        if (!user.name) {
            setError('Name cannot be empty.');
            return;
        } else if (!user.profileImage) {
            setError('Profile Image is required. Press on the below icon to upload it.')
        }

        setError('');
        next();
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const handleInputImage = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({...user, profileImage: reader.result});
            }

            reader.readAsDataURL(file);
        }
    };

    const triggerInput = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    return (
        <div className="auth-container d-flex justify-content-center align-items-center">
            <Card className="auth-card p-4 border-bottom">
                <h2 className="mb-4 text-4xl text-center">Basic Details</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                    <Form.Group controlId="formBasicImage">
                        {
                            user.profileImage !== null ? 
                            <img src={user.profileImage} alt="profile pic" className='w-1/2 mx-auto cursor-pointer rounded-full' onClick={triggerInput}/>
                            :
                            <img src={profilePlaceholder} alt="profile pic" className='w-1/2 mx-auto cursor-pointer' onClick={triggerInput}/>
                        }
                        <Form.Control
                            ref={inputRef}
                            type='file'
                            onChange={handleInputImage}
                            accept='image/*'
                            className='hidden'
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="name" 
                            placeholder="Enter Name" 
                            value={user.name} 
                            onChange={(e) => setUser({...user, name: e.target.value})} 
                        />
                    </Form.Group>
                    <Button variant="primary" className="w-100 mt-3" onClick={handleSignUp}>
                        Continue
                    </Button>
                </Form>
                <Button variant="link" className="w-100 mt-3 text-center" onClick={handleLogin}>
                    Back to Login
                </Button>
            </Card>
        </div>
    );
}

export default PageOne