
// import React, { useState } from 'react';
// import '../assets/css/Login.css'
// import fb from '../assets/img/fb.png';
// import google from '../assets/img/google.png';
// import { useNavigate, Link } from "react-router-dom";
// import '../assets/css/Login.css'



// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate('/dashboard');

//     if (username === 'user' && password === 'pass') {
//       console.log('Logged in successfully');
//       alert("Welcome");

//     } else {
//       console.log('Invalid credentials');
//       alert("Invalid");
//     }

//   };

//   return (
//     <>

//       <div className='design'
//         style={{
//           width: "300px",
//           border: "1px solid",
//           borderColor: "grey",
//           padding: "50px",
//           paddingTop: "15px",
//           paddingBottom: "15px",
//           borderRadius: "10px",
//         }}
//       >

//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiuFvyyJyfMGp9E4Ygn6d14v4MkB_NNSSmYDXC0ibGw&s" alt="pinterest" width="40" height="40" />
//         <p style={{ textAlign: "center", fontSize: "25px", color: "black", fontWeight: "bold", marginTop: "10px" }}> Welcome to Pinterest</p>

//         <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
//           Email: <input className="login" type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: "10px", padding: "10px", border: "1px solid #cfcccc" }} />
//           Password: <input className="login" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: "10px", padding: "10px", border: "1px solid #cfcccc" }} />

//           <p style={{ fontWeight: "bold", fontSize: "14px" }}>Forgot your password?</p>
//         </div>

//         <button onClick={handleLogin} style={{ background: "red", borderRadius: "30px", color: "white", margin: "0" }}>Log in</button>
//         <p style={{ textAlign: "center", fontWeight: "bold", margin: "0" }}>OR</p>

//         <button style={{ background: "blue", borderRadius: "30px", color: "white", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", margin: "0" }}>
//           <img src={fb} alt="fb" width="25" height="25" />
//           Continue with Facebook
//         </button>

//         <button style={{ background: "none", color: "grey", borderRadius: "30px", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", margin: "0", marginTop: "5px" }}>
//           <img src={google} alt="google" width="25" height="25" />
//           Continue with Google
//         </button>


//         <p style={{ textAlign: "center", fontSize: "12px" }}>
//           By continuing, you agree to Pinterest's <br />
//           <a style={{ color: "black" }}>Terms of Services</a> and acknowlegde you've read our <br />
//           <a style={{ color: "black" }}>Privacy Policy.</a> <a style={{ color: "black" }}>Notice at collection.</a>
//         </p>

//         <hr />

//         <p style={{ textAlign: "center", fontSize: "12px" }}>
//           <a style={{ color: "black", textDecoration: "none" }}>Not on Pinterest yet?</a> Sign up <br />
//           Are you a business? <a style={{ color: "black", textDecoration: "none" }}>Get started here!</a>
//         </p>

//       </div>

//     </>
//   )
// }

import React, { useState } from 'react';
import '../assets/css/Login.css';
import fb from '../assets/img/fb.png';
import google from '../assets/img/google.png';
import { useNavigate } from "react-router-dom";

export default function Login({ closeModal }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {

      if (username === 'user' && password === 'pass') {
        console.log('Logged in successfully');
        // alert("Welcome");
        closeModal();  // Close the modal after successful login
        navigate('/dashboard');
      } else {
        console.log('Invalid credentials');
        setUsername('');
        setPassword('');
      }
      setIsLoading(false);
    }, 2000);

  };

  return (
    <div className='design' style={{
      border: "1px solid",
      borderColor: "grey",
      padding: "20px",
      paddingTop: "15px",
      paddingBottom: "15px",
      borderRadius: "10px",
      position: "relative"
    }}>
      <button onClick={closeModal}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "fit-content",
          borderRadius: "20px",
          padding: "2px",
          color: "black"
        }}>
        X
      </button>
      <br />

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiuFvyyJyfMGp9E4Ygn6d14v4MkB_NNSSmYDXC0ibGw&s" alt="pinterest" width="40" height="40" />
      <p style={{ textAlign: "center", fontSize: "25px", color: "black", fontWeight: "bold", marginTop: "10px" }}> Welcome to Pinterest</p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
        Email: <input className="login" type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: "10px", padding: "10px", border: "1px solid #cfcccc" }} />
        Password: <input className="login" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: "10px", padding: "10px", border: "1px solid #cfcccc" }} />

        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Forgot your password?</p>
      </div>

      <button onClick={handleLogin} style={{ background: "red", borderRadius: "30px", color: "white", margin: "0" }}>Log in</button>
      <p style={{ textAlign: "center", fontWeight: "bold", margin: "0" }}>OR</p>

      <button style={{ background: "blue", borderRadius: "30px", color: "white", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", margin: "0" }}>
        <img src={fb} alt="fb" width="25" height="25" />
        Continue with Facebook
      </button>

      <button style={{ background: "none", color: "grey", borderRadius: "30px", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", margin: "0", marginTop: "5px" }}>
        <img src={google} alt="google" width="25" height="25" />
        Continue with Google
      </button>

      <p style={{ textAlign: "center", fontSize: "12px" }}>
        By continuing, you agree to Pinterest's <br />
        <a style={{ color: "black" }}>Terms of Services</a> and acknowledge you've read our <br />
        <a style={{ color: "black" }}>Privacy Policy.</a> <a style={{ color: "black" }}>Notice at collection</a>
      </p>
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
    </div>


  )
}

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold'
};