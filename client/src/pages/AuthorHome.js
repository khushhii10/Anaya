import React from 'react';
import AuthorLogin from '../components/AuthorLogin';
import AuthorRegister from '../components/AuthorRegister';

const AuthorHome = () => {
  return (
    <div>
      <h1>Author Home</h1>
      <AuthorLogin />
      <AuthorRegister />
    </div>
  );
};

export default AuthorHome;
