import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://localhost:7192";

function RegisterContributor() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    stageName: "",
    address: "",
    phoneNumber: "",
    hourlyRate: 750,
    bio: "",
    photoUrl: "",
  });

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "hourlyRate" ? Number(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/auth/register-contributor`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || `Registration failed (${res.status})`);
      }

      setSuccessMsg("Account created. You can now log in.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "3rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Register as contributor
      </h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMsg && <p style={{ color: "#4caf50" }}>{successMsg}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Full name
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Stage name
            <input
              name="stageName"
              value={formData.stageName}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Address
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Phone
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Hourly rate (SEK)
            <input
              type="number"
              name="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Photo URL
            <input
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.8rem" }}>
          <label>
            Bio
            <textarea
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.7rem",
            borderRadius: "999px",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default RegisterContributor;
