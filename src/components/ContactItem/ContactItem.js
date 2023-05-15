import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({contacts: {id, name, number}, onDeleteContact}) => {
    return (
        <li className={s.contactItem}>
            <p className = {s.contactData}>
                {name}:{number}
            </p>
            <button onClick = {() => onDeleteContact(id)}>Delete</button>
        </li>
    );
};

ContactItem.propTypes = {
    contact:PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;