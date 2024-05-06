

export default function SearchBox({handleChange}) {
  
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange}/>
    </div>
  )
}