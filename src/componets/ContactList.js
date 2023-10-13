import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
    console.log(props)
    const renderContactList = props.contacts.map((contact) => {
        return (
            // <div className="item">
            //     <div className="contact">
            //         <div className="header">{contact.name}</div>
            //         <div>{contact.email}</div>
            //         <i className="trash alternative outline icon"></i>
            //     </div>
            // </div>
            <ContactCard contact={contact}></ContactCard>
        )
    })
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;