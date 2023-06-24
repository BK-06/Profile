import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return;
        }

        const signupData = {
            firstName,
            email,
            password,
          };

        localStorage.setItem('signupData', JSON.stringify(signupData));

        setFirstName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        navigate('/profile');
        // location.href = '/profile';
    };
    
    useEffect(() => {

        const storedSignupData = localStorage.getItem('signupData');

        if (storedSignupData) {
          const parsedSignupData = JSON.parse(storedSignupData);
          setFirstName(parsedSignupData.firstName);
          setEmail(parsedSignupData.email);
          setPassword(parsedSignupData.password);
          setPasswordMatchError(false);
        }
    }, []);


    return (
        <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            {passwordMatchError && <p>Passwords do not match</p>}
            <button type="submit">Sign up</button>
        </form>
        </div>
    );

}