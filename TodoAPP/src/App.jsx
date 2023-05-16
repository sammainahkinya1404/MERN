import {useState} from "react"
import './styles.css';
export default function App(){
 const [newItem,setNewItem]=useState("")
//  setNewItem =""

function handlSumit(e){
  e.preventDefault()
}
  return(
    <>
    <form  onSubmit={handSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} id="item"/>

</div>
<button className="btn">
  Add

</button>
    </form>
    <h1 className='header'>Todo</h1>
    <ul className="list">
      <li>
      <label>
        <input type="checkbox" />
        Item 1
        </label>
        <button className="btn btn-danger" >Delete</button>
  
      </li>
      <li>
      <label>
        <input type="checkbox" />
        Item 2
        </label>
        <button className="btn btn-danger" >Delete</button>
  
      </li>
     
    </ul>
    
    </>
  )
  }
