import { useState } from "react";

import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"



const initialTasks = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];



export default function App() {

  const [tasks, setTasks] = useState(initialTasks)
  const [nameToSearch, setNameToSearch] = useState("");

  const handleChange = (event) => {
setNameToSearch(event.target.value)
  }


  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox handleChange={handleChange}/>
  <ContactList values={tasks} />
</div>
  )
}