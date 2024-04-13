import React from 'react';

export const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.name} - {contact.number}
    </li>
  );
};
