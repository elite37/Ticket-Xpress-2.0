import React from "react";

function Dashboard({ role }) {
  console.log(role);
  return (
    <div>
      {/* To Be Replaced By The Components For The Roles */}
      {role === "admin" && <h1> Hello Admin </h1>}
      {role === "agent" && <h1> Hello Agent </h1>}
      {role === "user" && <h1> Hello User </h1>}
    </div>
  );
}

export default Dashboard;
