import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact}) => {
    return (
        <ul className={s.contactList}>
            {contacts.map(contact => (
                <ContactItem key={contact.id} onDeleteContact= {onDeleteContact} contacts={contact}/>
            ))}
        </ul>
    );
};
export  default ContactList;