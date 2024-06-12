// import React, { useState } from "react";
// import Login from './Login'; // Adjust the path if necessary
// import '../assets/css/Login.css'

// export default function Welcomepage() {
//     const [isLoginModalVisible, setLoginModalVisible] = useState(false);

//     const showLoginModal = () => {
//         setLoginModalVisible(true);
//     };

//     const hideLoginModal = () => {
//         setLoginModalVisible(false);
//     };

//     return (
//         <div>
//             <nav className="navbar" style={{ width: "100%", position: "fixed", top: 20, left: 20, right: 20 }}>
//                 <div className="dashboard" style={{ display: "flex", marginTop: "0px", marginBottom: "20px" }}>
//                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiuFvyyJyfMGp9E4Ygn6d14v4MkB_NNSSmYDXC0ibGw&s' width="40" height="40" style={{ marginRight: "10px", margin: "10px" }} alt="logo" />
//                     <h3 style={{ color: "red" }}>Pinterest </h3>
//                     <button style={{ background: "white", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content", margin: "10px" }}>Watch</button>
//                     <button style={{ background: "white", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content", margin: "10px" }}>Explore</button>
//                     <hr />
//                     <a style={{ color: "black", margin: "10px", padding: "10px", width: "fit-content" }}>About</a>
//                     <a style={{ color: "black", margin: "10px", padding: "10px", width: "fit-content" }}>Business</a>
//                     <a style={{ color: "black", margin: "10px", padding: "10px", width: "fit-content" }}>Blog</a>
//                     <button onClick={showLoginModal} style={{ background: "red", borderRadius: "20px", color: "white", padding: "10px", width: "fit-content", margin: "13px" }}>Log in</button>
//                     <button style={{ background: "lightgrey", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content", margin: "13px" }}>Sign up</button>
//                 </div>
//             </nav>
          
//             <div style={{ padding: "10px", width: "fit-content"}}><br /><br /><br /> 
//                 <h1 style={{ color: "black", fontSize: "60px" }}>Get your next</h1>
//                 <h1 style={{ fontSize: "60px" }}>your new idea</h1>
//                 <h1 style={{ fontSize: "60px" }}><b>. . . .</b></h1>
//                 <img src='https://static.toiimg.com/photo/79531761.cms' width="300" height="350" style={{ marginRight: "10px", borderRadius: "2em", margin: "20px" }} alt="icon" />
//                 <img src='https://rb.gy/8bbs12' width="200" height="300" style={{ marginRight: "10px", borderRadius: "2em", margin: "10px" }} alt="icon" />
//                 <img src='https://rb.gy/15391h' width="300" height="300" style={{ marginRight: "10px", borderRadius: "2em", margin: "10px" }} alt="icon" />
//                 <img src='https://rb.gy/jcf86v' width="300" height="350" style={{ marginRight: "10px", borderRadius: "2em", margin: "10px" }} alt="icon" />
//             </div>

//             {isLoginModalVisible && (
//                 <div style={modalStyle}>
//                     <div style={modalContentStyle}>
//                         <Login closeModal={hideLoginModal} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// const modalStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// };

// const modalContentStyle = {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     width: '350px',
//     textAlign: 'center',
// };


import React, { useState } from "react";
import Login from './Login';

export default function Welcomepage() {
    const [isLoginModalVisible, setLoginModalVisible] = useState(false);

    const showLoginModal = () => {
        setLoginModalVisible(true);
    };

    const hideLoginModal = () => {
        setLoginModalVisible(false);
    };

    return (
        <div className="front">
            <nav className="navbar" style={{ width: "100%", position: "fixed", top: 20, left: 20, right: 20 }}>
                <div className="dashboard" style={{ display: "flex", marginTop: "0px", marginBottom: "20px" }}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiuFvyyJyfMGp9E4Ygn6d14v4MkB_NNSSmYDXC0ibGw&s' width="40" height="40" style={{ marginRight: "10px", margin: "10px" }} alt="logo" />
                    <h3 style={{ color: "red" }}>Pinterest </h3>
                    <button style={{ background: "white", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content", margin: "10px" }}>Watch</button>
                    <button style={{ background: "white", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content", margin: "10px" }}>Explore</button>
                    <hr />
                    <a style={{ color: "black", margin: "10px", padding: "10px", width: "fit-content" }}>About</a>
                    <a style={{ color: "black", margin: "10px", padding: "10px", width: "fit-content" }}>Business</a>
                    <a style={{ color: "black", margin: "10px", padding: "10px", width: "fit-content" }}>Blog</a>
                    <button onClick={showLoginModal} style={{ background: "red", borderRadius: "20px", color: "white", padding: "10px", width: "fit-content", margin: "13px" }}>Log in</button>
                    <button style={{ background: "lightgrey", borderRadius: "20px", color: "black", padding: "10px", width: "fit-content", margin: "13px" }}>Sign up</button>
                </div>
            </nav>
            
            <div className="front" ><br /><br /><br />
                <h1 style={{ color: "black", fontSize: "60px" }}>Get your next</h1>
                <h1 style={{ fontSize: "60px" , justifyContent:"center"}}>your new idea</h1>
                <h1 style={{ fontSize: "60px" , justifyContent:"center"}}><b>. . . .</b></h1>
                <img src='https://static.toiimg.com/photo/79531761.cms' width="300" height="350" style={{ marginRight: "10px", borderRadius: "2em", margin: "20px" }} alt="icon" />
                <img src='https://rb.gy/8bbs12' width="200" height="300" style={{ marginRight: "10px", borderRadius: "2em", margin: "10px" }} alt="icon" />
                <img src='https://rb.gy/15391h' width="300" height="300" style={{ marginRight: "10px", borderRadius: "2em", margin: "10px" }} alt="icon" />
                <img src='https://rb.gy/jcf86v' width="300" height="350" style={{ marginRight: "10px", borderRadius: "2em", margin: "10px" }} alt="icon" />
            </div>

            {isLoginModalVisible && (
                <div style={modalStyle}>
                    <div style={modalContentStyle}>
                        <Login closeModal={hideLoginModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalContentStyle = {
    backgroundColor: 'white',
    padding: '0px',
    borderRadius: '10px',
    width: '350px',
    textAlign: 'center',
};