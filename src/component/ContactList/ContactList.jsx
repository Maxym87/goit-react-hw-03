

import Contact from "../Contact/Contakt"

export default function ContactList({values}) {
  return (
    <ul>
      {values.map((value) => (
        <li key={value.id}><Contact contacts={value} /></li>
      ))}
  </ul>
)
}