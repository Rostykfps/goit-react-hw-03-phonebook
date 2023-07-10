import React, { Component } from 'react';
import ContactList from './ContactsList/ContactList';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Container, TitleContacts, TitlePhonebook } from './App.styled';

const LOCAL_STORAGE_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContactList = localStorage.getItem(LOCAL_STORAGE_KEY);
    const contactList = JSON.parse(savedContactList);

    if (savedContactList) {
      this.setState({ contacts: contactList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  filterContacts = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  createContact = data => {
    const { contacts } = this.state;

    const newContact = { id: nanoid(), ...data };
    const newContactName = newContact.name.toLocaleLowerCase();

    const findContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === newContactName
    );
    if (findContact) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm onSubmit={this.createContact}></ContactForm>
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} handleChange={this.filterContacts}></Filter>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}

export default App;
