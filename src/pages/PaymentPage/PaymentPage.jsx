import React from "react";
import Payment from "../../components/Payment/Payment";
import Styles from "./PaymentPage.module.css";

function PaymentPage() {
  return (
    <main>
      <div className={Styles.Payment_page}>
        <h1 className={Styles.textHead}>Make Secure Payment</h1>
        <div className={Styles.Payment_Wrapper}>
          <Payment />
        </div>
      </div>
    </main>
  );
}

export default PaymentPage;
