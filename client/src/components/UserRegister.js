import React, { useState } from 'react';
import axios from 'axios';

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', { username, email, password });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/UserRegister',{username,email,password})
      .then(result=>console.log(result))
      .catch(err=> console.log(err))
    }
  };

  return (
    <div>
      <h2>User Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
