// App.js
import React, { useState } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filtrer';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const isInPhonebook = contacts.some(
      phoneContact =>
        phoneContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInPhonebook) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
};
