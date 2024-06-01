import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function Login() {
    const [step, setStep] = useState(1);
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (emailOrPhone) {
            setStep(2);
            setError('');
        } else {
            setError('Please enter your email or phone number');
        }
    };

    const handleLogin = () => {
        if (password) {
            alert('Login successful');
        } else {
            setError('Please enter your password');
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="auth-container d-flex justify-content-center align-items-center">
            <Card className="auth-card p-4 border-bottom">
                <h2 className="mb-4 text-center">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {step === 1 && (
                    <Form>
                        <Form.Group controlId="formBasicEmailOrPhone">
                            <Form.Label>Email or Phone Number</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter email or phone number" 
                                value={emailOrPhone} 
                                onChange={(e) => setEmailOrPhone(e.target.value)} 
                            />
                        </Form.Group>
                        <Button variant="primary" className="w-100 mt-3" onClick={handleContinue}>
                            Continue
                        </Button>
                    </Form>
                )}
                {step === 2 && (
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </Form.Group>
                        <Button variant="primary" className="w-100 mt-3" onClick={handleLogin}>
                            Login
                        </Button>
                    </Form>
                )}
                <Button variant="link" className="w-100 mt-3 text-center" onClick={handleSignUp}>
                    Sign Up
                </Button>
            </Card>
        </div>
    );
}

export default Login;
