import { useState } from "react";
import * as Authervice from '../services/AuthService';

function Profile() {
  const [profile, setProfile] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Authervice.profile(profile)
    .then((data) => {
      
    })

    console.log("Profile update", profile);
  }

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2>Profile Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={profile.name}
          onChange={handleChange}
          style={inputStyles}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={profile.email}
          onChange={handleChange}
          style={inputStyles}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={profile.phone}
          onChange={handleChange}
          style={inputStyles}
        />
      </label>
      <label>
        Bio:
        <textarea
          name="bio"
          value={profile.bio}
          placeholder="Tell us about yourself"
          onChange={handleChange}
          style={textareaStyles}
        />
      </label>
      <button type="submit" style={buttonStyles}>Save Changes</button>
    </form>
  )
}

const formStyles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  background: "#f9f9f9",
};

const inputStyles = {
  marginBottom: "15px",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const textareaStyles = {
  marginBottom: "15px",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  minHeight: "80px",
};

const buttonStyles = {
  padding: "10px",
  borderRadius: "4px",
  border: "none",
  background: "#007BFF",
  color: "white",
  cursor: "pointer",
};

export default Profile;