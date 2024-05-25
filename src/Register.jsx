import React, { useState } from "react";
import backgroundImage from "../src/images/background1.png";
import { NavLink } from "react-router-dom";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
    console.log(name);

    let data = {
        name: name,
        pass: pass,
        email:email
    }


    fetch("http://localhost:5000/form1/submit1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((response) => {
          
          if (response.ok) {
            alert("Form data saved successfully!");
          } else {
            throw new Error("Registration failed Please check you credentials.");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred while saving the form data.");
        });   



    // Handle the data or perform any necessary actions

    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <div className="auth-form-container" style={styles.container}>
      <div className="content-container" style={styles.contentContainer}>
        <h2 style={styles.title}>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name" style={styles.label}>
            Full name
          </label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
            style={styles.input}
          />
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            style={styles.input}
          />
          <div style={styles.buttonContainer}>
            <button style={styles.button}>Next</button>
          </div>
        </form>
        <NavLink to="/login" style={styles.loginLink}>
          <button className="link-btn" style={styles.linkButton}>
            Already have an account? Login here.
          </button>
        </NavLink>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lightblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  label: {
    marginBottom: "8px",
  },
  input: {
    padding: "8px",
    marginBottom: "16px",
    borderRadius: "4px",
    border: "2px",
    width: "100%",
    backgroundColor: "lightblue",
  },
  buttonLink: {
    textDecoration: "none",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#34495E",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  loginLink: {
    marginTop: "16px",
    textDecoration: "none",
  },
  linkButton: {
    padding: "8px 16px",
    backgroundColor: "#1F618D",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Register;
