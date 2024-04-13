
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !number.trim()) return;
    addContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
