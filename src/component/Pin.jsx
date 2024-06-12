import React from "react";
import upload from '../assets/img/upload.png'



export default function Pin({ pinSize, img}) {
    return (
        <div className={`pin ${pinSize}`}>
            <img className="mainPic" 
            src={img}  alt="picture ni" />
            
            <div className="content">
                <button className="top">
                    Save
                </button>
             {/*   <img2 src={upload} alt="upload"
                width="30px"
                height="30px"/>
                 <img2 src={more} alt="more"
                width="53px"
                height="50px"/> */}
            </div>
        </div>

    )
}
