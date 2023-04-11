import React from "react"
import ContactItem from "./ContactItem";


const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                // <li key={contact.id}>{contact.name} {contact.number} </li>
                <ContactItem key={contact.id} name={contact.name} number={contact.number} />
            ))}
        </ul>
    )
}

export default ContactList;