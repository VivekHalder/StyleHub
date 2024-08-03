import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import validateEmail from '../../utils/validateEmail';

function PageTwo({ user, setUser, next, prev }) {

    const [error, setError] = useState('');

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        if (!user.email) {
            setError('Email cannot be empty.');
            return;
        } else if (!validateEmail(user.email)) {
            setError('Invalid email address.');
            return;
        }

        setError('');
        next();
    };

    return (
        <div className="auth-container d-flex justify-content-center align-items-center">
            <Card className="auth-card p-4 border-bottom">
                <h2 className="mb-4 text-4xl text-center">Contact Details</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter Email" 
                            value={user.email} 
                            onChange={(e) => setUser({...user, email: e.target.value})} 
                        />
                    </Form.Group>
                    <Button variant="primary" className="w-100 mt-3" onClick={handleSignUp}>
                        Continue
                    </Button>
                    <Button variant="primary" className="w-100 mt-3" onClick={prev}>
                        Back
                    </Button>
                </Form>
                <Button variant="link" className="w-100 mt-3 text-center" onClick={handleLogin}>
                    Back to Login
                </Button>
            </Card>
        </div>
    );
}

export default PageTwo;