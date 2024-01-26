import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthComponent = (WrappedComponent) => {
  if (checkAuth()) return (props) => <WrappedComponent {...props} />;
  return () => <div>Can you please login first?</div>;
  return <Redirect to="/login" />;
};

const checkAuth = () => {
  // return true;
  return !!localStorage.getItem('userToken');
};

export default withAuthComponent;
