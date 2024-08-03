import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import validatePhone from '../../utils/validatePhone';

function PageThree({ user, setUser, next, prev }) {

    const [error, setError] = useState('');

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        if (!user.phone) {
            setError('Phone number cannot be empty.');
            return;
        } else if (!validatePhone(user.phone)) {
            setError('Invalid Phone Number.');
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
                    <Form.Group controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                            type="phone" 
                            placeholder="Enter Phone Number" 
                            value={user.phone} 
                            onChange={(e) => setUser({...user, phone: e.target.value})} 
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

export default PageThree;