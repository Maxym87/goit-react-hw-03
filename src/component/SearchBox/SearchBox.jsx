

export default function SearchBox({ value, OnSearch }) {
  

  
  return (
    <div>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={(event) => OnSearch(event.target.value)}
      />
    </div>)
}