import React, { useEffect, useState, useId } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const id = useId()
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: id, ...contact }]);
  };

  // Load contacts from localStorage once on component mount
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("Loaded contacts from localStorage:", storedContacts);
    if (storedContacts) setContacts(storedContacts);
  }, []);

  // Save contacts to localStorage whenever contacts state changes
  useEffect(() => {
    if (contacts.length>0) {
    console.log("Saving contacts to localStorage:", contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));}
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
