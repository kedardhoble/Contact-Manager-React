import React from "react";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const navigate=useNavigate()

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

 

  return (
    <div className='main'>
        <h2>
            Contact List
            <button className="ui button blue right" onClick={()=>{navigate("/add")}}>Add Contact</button>
        </h2>
        <div className="ui celled list">{props.contacts.map((contact) => {
      return <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
  })}</div>
    </div>
  );
};

export default ContactList;