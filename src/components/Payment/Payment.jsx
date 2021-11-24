import React from "react";
import Styles from "./Payment.module.css";
import { Link } from "react-router-dom";
import { GiPadlock } from "react-icons/gi";
import { BsCheckLg } from "react-icons/bs";
import CardImage from "../../assets/images/card.png";
import DebitImage from "../../assets/images/icons8-credit-card-60.png";
import UssdImage from "../../assets/images/icons8-credit-card-60 copy.png";
import DirectDebit from "../../assets/images/icons8-merchant-account-50.png";

function Payment() {
  return (
    <main>
      <div className={Styles.Payment_Container}>
        <div className={Styles.Card_container}>
          <h1>Card Payment</h1>
          <p>N33,000</p>
        </div>
        <div className={Styles.text}>
          <p>Payment method support are listed below</p>
        </div>
        <div className={Styles.img_container}>
          <Link className={Styles.debitcard_img}>
            <img src={CardImage} alt="img" />
          </Link>
        </div>

        <div className={Styles.rave_container}>
          <button className={Styles.btn}>rave</button>
          <div className={Styles.Icon_container}>
            <Link className={Styles.cardIcon_img}>
              <img src={DirectDebit} alt="img" />
              <p>Direct Debit</p>
            </Link>

            <Link className={Styles.cardIcon_img}>
              <img src={UssdImage} alt="img" />

              <p>Card Payment</p>
            </Link>

            <Link className={Styles.cardIcon_img}>
              <img src={DebitImage} alt="img" />
              <p>USSD Payment</p>
            </Link>
          </div>
        </div>

        <div className={Styles.Secure_payment}>
          <h2>N39500</h2>
          <button className={Styles.payBtn}>Pay Securely </button>
        </div>
        <div className={Styles.Secure_Booking}>
          <span>
            <GiPadlock />
            This booking is 100% Protected
          </span>
        </div>

        <div className={Styles.Secure_feature}>
          <span>
            <BsCheckLg className="icon" />
            Secure transmission
          </span>
          <span>
            <BsCheckLg />
            Encrypted storage
          </span>
        </div>
      </div>
    </main>
  );
}

export default Payment;
