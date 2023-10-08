import React from "react";
import { useState } from "react";
import './style.css';

const Registration = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  
    // Automatické vyplnění první části emailu do jména
    if (name === 'email' && !user.username && value.includes('@')) {
      const getUsernameFromEmail = value.split('@')[0];
      setUser((previousUserData) => ({
        ...previousUserData,
        username: getUsernameFromEmail,
      }));
    }
  };

  // Vypsání vyplněných údajů do konzole
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );

}

export default Registration;
