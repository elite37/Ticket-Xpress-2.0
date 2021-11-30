import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import instance from "../../utils/axios";
import UserDashboard from "../UserDashboard";
import AdminDashboard from "../AdminDashboard";
import { UserConsumer } from "../../context";
import { actionTypes } from "../../context/reducer";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [{ userDetails }, dispatch] = UserConsumer();
  useEffect(() => {
    instance
      .get("/user")
      .then((res) => {
        setLoading(false);
        dispatch({
          type: actionTypes.SET_USER_DETAILS,
          user: res.data,
        });
      })
      .catch((err) => console.error(err.message));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : userDetails.role === "user" ? (
        <UserDashboard user={userDetails} />
      ) : userDetails.role === "admin" ? (
        <AdminDashboard user={userDetails} />
      ) : (
        <h1>Agent Dashboard In Progress</h1>
      )}
    </>
  );
}

export default Dashboard;
