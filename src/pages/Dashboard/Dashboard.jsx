import React from "react";
import DashboardNav from "../../components/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import "./Dashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OverView from "../../components/OverView";

function Dashboard({ role }) {
  return (
    <div className='dashboard'>
      <Router>
        <DashboardSidebar />
        <main>
          <DashboardNav />
          <div className='dashboard__user'>
            <h1>Good Morning, Admin</h1>
          </div>
          <Switch>
            <Route exact path='/dashboard' component={OverView} />
            <Route exact path='/addbooking' component={<h1>Hello World </h1>} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default Dashboard;
