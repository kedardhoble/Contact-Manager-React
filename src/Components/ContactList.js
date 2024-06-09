import React from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const navigate = useNavigate();

  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  return (
    <div className='main'>
      <h2>
        Contact List
        <button
          className="ui button blue right"
          onClick={() => navigate("/add")}
        >
          Add Contact
        </button>
      </h2>
      <div className="ui celled list">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHander={deleteContactHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
