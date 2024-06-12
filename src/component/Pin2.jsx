import React from "react";
// import upload from '../assets/img/upload.png'



export default function Pin2({ pinSize2, img2}) {
    return (
        <div className={`pin ${pinSize2}`}>
            <img className="mainPic" 
            src={img2}  alt="picture ni" />
            
            <div className="content">
                <button className="top">
                    Save
                </button>
                {/* <img src={upload} alt="upload"
                width="30px"
                height="30px"/>
                <img src={more} alt="more"
                width="53px"
                height="50px"/> */}
            </div>
        </div>

    )
}
