

import Contact from "../Contact/Contakt"
import { nanoid } from "nanoid"

export default function ContactList({data, onDelete}) {
  
 const contacts = data.map((contact) => {
        return <li key={nanoid()}><Contact contact={contact} onDelete={onDelete}></Contact></li>
    })
    return (<ul>{contacts }</ul>)
}