import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (contact) => {

    this.setState(prevState => ({
      contacts: [{
        name: `${contact.name}`,
        number: `${contact.number}`,
        id: nanoid(3),
      },
      ...prevState.contacts],

    }))
  }


  render() {
    const { contacts, name, number, filter } = this.state;

    const newСontacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}></ContactForm>

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter} />
        <ContactList contacts={newСontacts} />
      </>
    );
  }
};