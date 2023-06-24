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
        <div className="container justify-content-center text-center">
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
            <label className="input-group-text" htmlFor="firstName">First Name:</label>
            <input
            className="form-control"
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            </div>
            <div className="input-group">
            <label className="input-group-text" htmlFor="email">Email:</label>
            <input
                className="form-control"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="input-group">
            <label className="input-group-text" htmlFor="password">Password:</label>
            <input
                className="form-control"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <div className="input-group">
                <label className="input-group-text" htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    className="form-control"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            {passwordMatchError && <p>Passwords do not match</p>}
            <button className="btn btn-primary mt-2" type="submit">Sign up</button>
        </form>
        </div>
    );

}