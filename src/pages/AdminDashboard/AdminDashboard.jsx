import React from "react";
import DashboardNav from "../../components/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import "./AdminDashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OverView from "../../components/OverView";
import AddBus from "../../components/AddBus";

function AdminDashboard({ user }) {
  return (
    <div className='dashboard'>
      <Router>
        <DashboardSidebar />
        <main>
          <DashboardNav />
          <div className='dashboard__user'>
            <h1>Good Morning, {user.firstname}</h1>
          </div>
          <Switch>
            <Route exact path='/dashboard' component={OverView} />
            <Route exact path='/dashboard/addbus' component={AddBus} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default AdminDashboard;
