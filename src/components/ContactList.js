import React from "react";
import ContactCard from "./ContactCard";
import { Button } from "@material-ui/core";

const ContactList =(props) =>{
    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }
    const renderContactList = props.contactL.map((contact) => {
        return (
            <ContactCard contact = {contact} clickHandler= {deleteContactHandler} key={contact.id}/>
        )
    });

    const onClickAddContact = ()=>{
        props.history.push("/add");
    }
    return(
        <div style = {{ margin: 80}}>
            <h2 className="header" style={{display:"inline"}}>Contact List </h2>
            <Button variant="contained" style={{float: 'right'}} onClick={onClickAddContact}>Add Contact</Button>
        <div  className= 'ui celled list' >
           {renderContactList}
        </div> 
        </div>
    );
}

export default ContactList;