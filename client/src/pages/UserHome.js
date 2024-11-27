import React from 'react';
import UserLogin from '../components/UserLogin';
import UserRegister from '../components/UserRegister';

const UserHome = () => {
  return (
    <div>
      <h1>User Home</h1>
      <UserRegister/>
      <UserLogin/>
    </div>
  );
};
export default UserHome;
