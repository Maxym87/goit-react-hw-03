

import Contact from "../Contact/Contact"
import { nanoid } from "nanoid"
import css from './ContactList.module.css'

export default function ContactList({data, onDelete}) {
  
 const contacts = data.map((contact) => {
        return <li className={css.listItem} key={nanoid()}><Contact contact={contact} onDelete={onDelete}></Contact></li>
    })
    return (<ul className={css.list}>{ contacts }</ul>)
}