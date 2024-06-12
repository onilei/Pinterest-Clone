import React from 'react';
import '../assets/css/Logout.css';

const Logout = ({ onLogout }) => {
  return (
    <div className="logout-container">
      <div className="logout-section">
        <p>Your Account</p>
        <button className="logout-button">Add Account</button>
        <button className="logout-button">Convert to Business</button>
      </div>
      <div className="logout-section">
        <p>More Options</p>
        <button className="logout-button">Settings</button>
        <button className="logout-button">Home feed tuner</button>
        <button className="logout-button">Install the Windows app</button>
        <button className="logout-button">Reports and violations center</button>
        <button className="logout-button">Your privacy Rights</button>
        <button className="logout-button">Help center</button>
        <button className="logout-button">Terms of Services</button>
        <button className="logout-button">Privacy policy</button>
        <button className="logout-button">Be a beta tester</button>
        <button className="logout-button" onClick={onLogout}>
          Log out
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-me1FR3PzjVsIpxQSNQYn2iyHp3Q_ty9QH4PXsfVtbZBr1mgMm2cBwm468HByPmf6Hes&usqp=CAU"
            alt="logout"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  );
};

export default Logout;
