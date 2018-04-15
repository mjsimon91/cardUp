import React from "react";
import "./Wrapper.css";

const Wrapper = props => 
<div className="container Wrapper">
    <div className="row">{props.children}</div>;
</div>


export default Wrapper;
