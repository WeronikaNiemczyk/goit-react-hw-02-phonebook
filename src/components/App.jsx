import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { ContactsList } from './ContactsList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const onChange = event => {
    setName(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (name.trim()) {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
      };
      setContacts([...contacts, newContact]);
      setName('');
    }
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <form onSubmit={onSubmit}>
        <Input onChange={onChange} value={name} />
        <Button type="submit" />
        <ContactsList contacts={contacts} />
      </form>
    </div>
  );
};
// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';

// export function App() {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');

//   const handleChange = event => {
//     setName(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (name.trim()) {
//       const newContact = {
//         id: nanoid(),
//         name: name.trim(),
//       };
//       setContacts([...contacts, newContact]);
//       setName('');
//     }
//   };

//   return (
//     <div>
//       <h1>Książka kontaktów</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nazwa kontaktu:
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Dodaj kontakt</button>
//       </form>
//       <h2>Lista kontaktów:</h2>
//       <ul>
//         {contacts.map(contact => (
//           <li key={contact.id}>{contact.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
