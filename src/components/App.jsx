import React, { Component } from 'react';
import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = evt => {
    this.setState({ name: evt.currentTarget.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    // let aaa = this.setState([...this.state.contacts, { name: `${this.state.name}` }]);

    // this.setState(({ contacts }) => ({
    //   contacts: [{ name: `${this.state.name}` }, ...contacts],
    // }));

    this.setState({
      contacts: [{
        name: `${this.state.name}`,
        id: nanoid(3),
      },
      ...this.state.contacts],
      name: '',
    })

    console.log(this.state)
  }

  render() {

    return (
      <>

        <h1>Phonebook</h1>

        <form onSubmit={this.handleSubmit}>

          <label >
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>

          <button type='submit'>Add Contact</button>

        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
};