import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import Logout from './Logout';
import Adjust from '../assets/img/adjust.png';
import Bell from '../assets/img/bell.png';
import Message from '../assets/img/message.png';
import LogoutIcon from '../assets/img/down.png'; // renamed to avoid conflict with the component

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogout(!showLogout);
  };

  const handleDirectLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <main>
      <nav className="navbar" style={{ width: "100%", position: "fixed", top: 20, left: 10, right: 10 }}>
          <div className='header'>
            <div className="dashboard" style={{ display: "flex", marginTop: "30px", marginBottom: "70px" }}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiuFvyyJyfMGp9E4Ygn6d14v4MkB_NNSSmYDXC0ibGw&s' width="40" height="40" style={{ marginRight: "10px" }} alt="logo" />
              <button style={{ background: "white", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content" }}>
                Home
              </button>
              <button style={{ background: "white", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content" }}>
                Create
              </button>
              <input type="text" placeholder="Search" style={{ borderRadius: "20px", padding: "10px", display: "flex", marginRight: "10px" }} />
              <img src={Message} width="28" height="28" style={{ marginRight: "10px", marginTop: "5px"}} alt="icon" />
              <img src={Bell} width="28" height="28" style={{ marginRight: "10px", marginTop: "5px" }} alt="icon" />
              <img src='https://cdn-icons-png.flaticon.com/512/80/80889.png' width="28" height="28" style={{ marginRight: "10px" , marginTop: "5px"}} alt="icon" />
              <img src={LogoutIcon} width="15" height="15" style={{ marginRight: "10px", marginTop: "10px" }}  onClick={handleLogoutClick} alt="icon" />
            </div>
            
            <div style={{ display: "flex", position: "fixed", top: 100, left: 50, right: 50, gap: 5 }}>
              <img width="40" height="40" src={Adjust} style={{margin:"2px"}}/>
              <Link to="/Ideas" >
                <button style={{ backgroundColor: "coral", color: "black", borderRadius: "20px", marginRight: "5px", fontFamily:'serif' }}>Ideas</button>
              </Link>
              <Link to="/Soup" >
                <button style={{ backgroundColor: "plum", color: "black", borderRadius: "20px", marginRight: "5px", fontFamily:'serif' }}>Soup</button>
              </Link>
              <Link to="/Cars">
              <button style={{ backgroundColor: "lightblue", color: "black", borderRadius: "20px", marginRight: "5px", fontFamily:'serif' }}>Cars</button>
              </Link>
              <Link to="/Pasta">
              <button style={{ backgroundColor: "khaki", color: "black", borderRadius: "20px", marginRight: "5px", fontFamily:'serif' }}>Pasta</button>
              </Link>
              <Link to="/Flowers">
              <button style={{ backgroundColor: "lightgreen", color: "black", borderRadius: "20px", marginRight: "5px", fontFamily:'serif' }}>Flowers</button>
              </Link>
              <Link to="/Instrument">
              <button style={{ backgroundColor: "plum", color: "black", borderRadius: "20px", marginRight: "5px", fontFamily:'serif' }}>Instruments</button>
              </Link>
            </div>
          </div>
        </nav>
        {showLogout && (
          <Logout onLogout={handleDirectLogout} />
        )}
      </main>
    </div>
  );
};

export default Navbar;
