import React from "react";
import "../styles.css";

export default function DetailsTable({ data }) {
  return (
    <div className="table-container">
      <h2 className="table-title">Teacher Attendance Details</h2>

      <table className="details-table">
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", padding: "20px" }}>
                No Records Found
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.teacher}</td>
                <td>{row.date}</td>
                <td
                  className={
                    row.status === "Present"
                      ? "status-green"
                      : row.status === "Absent"
                      ? "status-red"
                      : "status-yellow"
                  }
                >
                  {row.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
