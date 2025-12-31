import React, { useEffect, useState } from "react";

// SCHIMBĂ la portul backend-ului tău (uită-te în Swagger)
const API_BASE_URL = "https://localhost:7192";

function Contributor() {
  const [contributor, setContributor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContributor = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/me`, {
          credentials: "include", // 👈 IMPORTANT pentru login cu cookie
        });

        if (response.status === 401) {
          throw new Error("You must be logged in to see this page.");
        }

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        setContributor(data);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    loadContributor();
  }, []);

  if (loading) {
    return (
      <div className="contributor-page" style={{ padding: "2rem" }}>
        <h1>My Contributor Page</h1>
        <p>Loading your data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="contributor-page" style={{ padding: "2rem" }}>
        <h1>My Contributor Page</h1>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  if (!contributor) {
    return (
      <div className="contributor-page" style={{ padding: "2rem" }}>
        <h1>My Contributor Page</h1>
        <p>No contributor profile found.</p>
      </div>
    );
  }

  return (
    <div
      className="contributor-page"
      style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        My Contributor Page
      </h1>

      {/* Info + poză */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "1.5rem",
          alignItems: "flex-start",
          marginBottom: "2rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {contributor.photoUrl ? (
            <img
              src={contributor.photoUrl}
              alt={contributor.stageName || contributor.fullName}
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "#222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
              }}
            >
              No photo
            </div>
          )}
        </div>

        <div>
          <h2>Personal information</h2>
          <p>
            <strong>Full name:</strong> {contributor.fullName}
          </p>
          {contributor.stageName && (
            <p>
              <strong>Stage name:</strong> {contributor.stageName}
            </p>
          )}
          <p>
            <strong>Address:</strong> {contributor.address}
          </p>
          <p>
            <strong>Phone:</strong> {contributor.phoneNumber}
          </p>
          <p>
            <strong>Email:</strong> {contributor.email}
          </p>
          <p>
            <strong>Hourly rate:</strong> {contributor.hourlyRate} SEK
          </p>

          {contributor.bio && (
            <>
              <h3 style={{ marginTop: "1rem" }}>Bio</h3>
              <p>{contributor.bio}</p>
            </>
          )}
        </div>
      </section>

      {/* Payment history */}
      <section>
        <h2>Payment history</h2>

        {!contributor.payments || contributor.payments.length === 0 ? (
          <p>No payments registered yet.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "1rem",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      borderBottom: "1px solid #333",
                      padding: "0.5rem",
                    }}
                  >
                    Date
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      borderBottom: "1px solid #333",
                      padding: "0.5rem",
                    }}
                  >
                    Amount (SEK, incl. VAT)
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      borderBottom: "1px solid #333",
                      padding: "0.5rem",
                    }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {contributor.payments.map((p) => (
                  <tr key={p.id}>
                    <td
                      style={{
                        borderBottom: "1px solid #222",
                        padding: "0.5rem",
                      }}
                    >
                      {new Date(p.paymentDate).toLocaleDateString()}
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #222",
                        padding: "0.5rem",
                      }}
                    >
                      {Number(p.amount).toFixed(2)}
                    </td>
                    <td
                      style={{
                        borderBottom: "1px solid #222",
                        padding: "0.5rem",
                      }}
                    >
                      {p.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default Contributor;
