import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const renderContactList =props.contacts.map((contacts) => {
        return <ContactCard contact={contacts}></ContactCard>
    });
    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    )
}

export default ContactList;