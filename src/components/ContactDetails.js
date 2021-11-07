import React from "react";
import user from "../images/user.png";
import { Button } from "@material-ui/core";

const ContactDetails = (props) => {
    console.log(props);
    const {id, name, email} = props.location.state.contact;
   const onClickContactList =() =>{
        props.history.push("/contact-list");
    }
    return(
        <div className='main'  style={{marginTop: 50}}>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt='user' />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
            <Button variant="contained" style={{float: 'inherit'}} onClick={onClickContactList}>Contact List</Button>

        </div>  
    );
}

export default ContactDetails;
