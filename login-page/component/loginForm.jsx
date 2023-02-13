import React, {useState} from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <div className="container">
    <div>
      <div className="headings">
        <div className="heading1">💎Sleri.io</div>
        <div className="heading2">Sign-In</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username/Email ID"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <p>Forgot password?</p>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <p>Don’t have an account? <a href="/">Sign up</a></p>
      </form>

      </div>
    </div>
  );
};

export default LoginForm;
