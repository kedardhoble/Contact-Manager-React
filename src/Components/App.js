import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

const LOCAL_STORAGE_KEY = "contacts";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return savedContacts ?? [];
  });

  const addContactHandler = (name, email) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: uuid(), name, email },
    ]);
  };

  const removeContactHandler = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const saveContactsToLocalStorage = (contacts) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log("Saving contacts to localStorage:", contacts);
  };

  // Load contacts from localStorage once on component mount
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) setContacts(storedContacts);
    console.log("Loaded contacts from localStorage:", storedContacts);
  }, []);

  // Save contacts to localStorage whenever contacts state changes
  useEffect(() => {
    if (contacts.length > 0) {
      saveContactsToLocalStorage(contacts);
    }
  }, [contacts]);

  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/add'
            element={
              <div className='mt-5'>
                <AddContact addContactHandler={addContactHandler} />
              </div>
            }
          />
          <Route
            path='/'
            element={
              <div className='mt-5'>
                <ContactList contacts={contacts} getContactId={removeContactHandler} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
