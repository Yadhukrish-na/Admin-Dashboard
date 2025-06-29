import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css"; 

const UserStatusTable = ({ initialUsers }) => {
  const [users] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : user.status.toLowerCase() === filter;

    return matchesSearch && matchesFilter;
  });

  const getRowClass = (status) => {
    switch (status) {
      case "Accepted":
        return "row-accepted";
      case "Rejected":
        return "row-rejected";
      case "Pending":
        return "row-pending";
      default:
        return "";
    }
  };

  const getStatusBadge = (status) => {
    const baseClass = "badge px-3 py-2";
    switch (status) {
      case "Accepted":
        return <span className={`${baseClass} bg-success`}>Accepted</span>;
      case "Rejected":
        return <span className={`${baseClass} bg-danger`}>Rejected</span>;
      case "Pending":
      default:
        return <span className={`${baseClass} bg-warning text-dark`}>Pending</span>;
    }
  };

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow">
      <h2 className="mb-4 text-start">
        <span role="img" aria-label="users">👥</span>{" "}
        <strong>User Status Table</strong>
      </h2>

      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div>
          {["all", "Accepted", "Pending", "Rejected"].map((type) => (
            <button
              key={type}
              className={`btn me-2 mb-2 ${
                filter === type.toLowerCase() ? "btn-dark" : "btn-secondary"
              }`}
              onClick={() => setFilter(type.toLowerCase())}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="ms-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ minWidth: "250px" }}
          />
        </div>
      </div>

      <table className="table table-bordered text-center">
        <thead style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className={getRowClass(user.status)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{getStatusBadge(user.status)}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/user/${user.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserStatusTable;
