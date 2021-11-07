import React from "react";
import user from "../images/user.png";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ContactDetails from "./ContactDetails";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return(
        <div className="item" style={{margin: 10, position: "relative"}}>
        <img className ="ui avatar image" src={user} alt = "user" style={{position: "relative"}} />    
        <div className="content"  style={{marginLeft: 15}}>
         <Link to={{pathname:'/contact-details/${id}', state: {contact:props.contact}}}>   
            <div className="header">Name: {name}</div>
            <div>Email: {email}</div>
          </Link>  
        </div>
        
        <RiDeleteBin5Fill style = {{color: "red", fontSize: 25,  float: 'right'}} onClick = {() =>props.clickHandler(id)} /> 
     </div>  
    );
}

export default ContactCard;
