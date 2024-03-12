import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  /* const auth = useAuth(); */

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);

    try {
      const response = await fetch("http://localhost:3030/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const json = (await response.json());
        console.log(json);
        setUsername("");
        setPassword("");
        <Redirect to="/" />
      } else {
        const json = (await response.json());

        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

 /*  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } */

  return (
      <form onSubmit={handleSubmit} className="form">
        <h1>Signup</h1>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Create account</button>
      </form>
  );
}