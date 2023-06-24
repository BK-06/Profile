import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Profile = (authorized) => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState(null);



  const handleLogout = () => {
    // Clear the signup data from local storage
    localStorage.removeItem('signupData');
    // Reset the signup data state
    setSignupData(null);
    navigate('/login')
  };

  useEffect(() => {
    const storedSignupData = localStorage.getItem('signupData');

    if (storedSignupData) {
      const parsedSignupData = JSON.parse(storedSignupData);
      setSignupData(parsedSignupData);
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className='container'>
      <div className='card theme-black'>

      <h1>Profile</h1>
      {signupData ? (
        <div>
          <p>First Name: {signupData.firstName}</p>
          <p>Email: {signupData.email}</p>
          <p>Password: {signupData.password}</p>
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          
        </div>
      ) : (
        <div>
          <p>First Name:</p>
          <p>Email:</p>
          <p>Password:</p>
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Profile;