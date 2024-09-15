import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'; // Import Redirect
import Login from '../pages/Login'; // Import the Login component

const ProtectedQuestionForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (you may need to adjust this based on your authentication logic)
    const isLoggedIn = !!localStorage.getItem('id');
    setLoggedIn(isLoggedIn);
  }, []);

  // If user is not logged in, redirect to login page
  if (!loggedIn) {
    return <Redirect to="/pages/login" />;
  }

  // If user is logged in, render the QuestionForm
  return <QuestionForm />;
};

export default ProtectedQuestionForm;
