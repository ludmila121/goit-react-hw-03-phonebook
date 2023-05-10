import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import '../components/App.css';
import ContactForm from './ContactForm/ContactForm';



class  App extends Component {
  state = {
    contacts:[
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount(){
    console.log('App componentDidMount');

const contacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contacts);
if (parsedContacts) {
  this.setState({contacts: parsedContacts})
}
  }

  componentDidMount(){
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле contacts, записую contacts в хранилище');
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts));
    }
  }

  onCheckContact = value => {
    return this.state.contacts.find(item => item.name.toLowerCase() === value.toLowerCase());
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      name: date.name,
      number: data.number,
    };

    if (this.onCheckContact(contact.name)) {
      alert (`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({contacts}) => ({
      contacts:[contact, ...contacts],
    })); 
  } ;

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter( contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
};
