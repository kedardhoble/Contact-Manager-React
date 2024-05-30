import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import "./App.css";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (name, email) => {
    setContacts([...contacts, { id: uuid(), name: name, email: email}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList)
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/add' element={<div className='mt-5'><AddContact addContactHandler={addContactHandler}/></div>} />
          <Route path='/' element={ <div className='mt-5'><ContactList contacts={contacts} getContactId={removeContactHandler}/></div>} />
          </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
