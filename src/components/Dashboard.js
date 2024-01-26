// import React from 'react';
import WithAuth from './WithAuth';

const Dashboard = (props) => {
  return <div>Welcome to dashboard named: {props.name}</div>;
};

export default WithAuth(Dashboard);
