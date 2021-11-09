import React from "react";
import MyTicket from "../../components/MyTicket";
import "./MyTicketsPage.css";

function MyTicketsPage() {
  return (
    <main>
      <h1 className='text'>What would you like to do?</h1>
      <div className='box-container'>
        <MyTicket />
        <MyTicket />
        <MyTicket />
      </div>
    </main>
  );
}

export default MyTicketsPage;
