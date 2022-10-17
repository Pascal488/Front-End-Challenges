import React from "react";

import "./style.css";
const values = '<Button />'
const Button = () =>{
    

    return(

        <div>
        <div>{values}</div>
        <input type="button" value="Default" placeholder="Default" className="btn" />
        </div>

    );
}


export default Button;