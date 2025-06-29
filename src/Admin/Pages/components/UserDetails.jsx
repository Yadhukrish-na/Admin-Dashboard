import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import usersData from "../data/users"; // your original user data

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState(usersData);
  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  const user = users[userIndex];

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h2>User not found</h2>
      </div>
    );
  }

  const handleStatusChange = (newStatus) => {
    const updatedUsers = [...users];
    updatedUsers[userIndex] = { ...user, status: newStatus };
    setUsers(updatedUsers);
    navigate("/"); // Redirect to main table
  };

  return (
    <div className="container mt-5 p-4 bg-light rounded shadow-sm">
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-header bg-dark text-white text-center">
          <h3><span role="img" aria-label="user">👤</span> User Details</h3>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <strong>Name:</strong> <span>{user.name}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <strong>Email:</strong> <span>{user.email}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <strong>Age:</strong> <span>{user.age}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <strong>Contact:</strong> <span>{user.contact}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <strong>Address:</strong> <span>{user.address}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Status:</strong>
            <span className={`badge px-3 py-2 ${
              user.status === "Accepted"
                ? "bg-success"
                : user.status === "Rejected"
                ? "bg-danger"
                : "bg-warning text-dark"
            }`}>
              {user.status}
            </span>
          </li>
        </ul>

        <div className="card-footer text-center d-flex justify-content-around">
          <button
            className="btn btn-success px-4"
            onClick={() => handleStatusChange("Accepted")}
          >
            Accept
          </button>
          <button
            className="btn btn-danger px-4"
            onClick={() => handleStatusChange("Rejected")}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
