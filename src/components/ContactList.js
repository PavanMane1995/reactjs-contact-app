import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props) =>{
    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    }
    const renderContactList = props.contactL.map((contact) => {
        return (
            <ContactCard contact = {contact} clickHandler= {deleteContactHandler} key={contact.id}/>
        )
    });
    return(
        <div style = {{ margin: 80}}>
            <h2 className="header" >Contact List </h2>
        <div  className= 'ui celled list' >
           {renderContactList}
        </div> 
        </div>
    );
}

export default ContactList;