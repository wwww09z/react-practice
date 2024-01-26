import React from 'react';
import { redirect } from 'react-router-dom';

const withAuthComponent = (WrappedComponent) => {
  if (checkAuth()) return (props) => <WrappedComponent {...props} />;
  return () => <div>Can you please login first?</div>;
  return redirect("/login");
};

const checkAuth = () => {
  // return true;
  return !!localStorage.getItem('userToken');
};

export default withAuthComponent;
