import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://localhost:7192";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // trimitem cookie
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || `Login failed (${res.status})`);
      }

      // dacă login reușește → mergem la pagina Contributor
      navigate("/contributor");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "3rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.6rem",
            borderRadius: "999px",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
