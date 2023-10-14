import React from "react";
import user from "../images/Contact.png"

const ContactCard = (props) =>{
    const {id,name,email} = props.contact
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
        <div className="contact">
            <div className="header">{name}</div>
            <div>{email}</div>
            <i className="trash alternative outline icon"
            style={{color:"red",marginTop:"7px"}}></i>
        </div>
    </div>
    )
}

export default ContactCard