
import css from './Contact.module.css'

export default function Contact({ contact: {name, number, id}, onDelete }) {
  
  return (
    <div className={css.box}>
      <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
</div>
      <button className={css.btn} onClick={() => {onDelete(id)}}>Delete</button>
</div>
 )
}