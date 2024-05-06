


export default function Contact({contacts: {name, number}}) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button type="buttin">Delete</button>
   </div>
 )
}