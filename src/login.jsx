import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    if (username === "user" && password === "password") {
      setMessage("Welcome, user");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login Page</h1>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div>
            <button
              type="submit"
              //disabled={!username || !password}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "4px",
                //cursor: !username || !password ? "not-allowed" : "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        {message && (
          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              fontWeight: "bold",
              color: message === "Welcome, user" ? "green" : "red",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;