import { useContext } from "react"
import { ContextTodo } from "./ContextTodo"



const Todo = () => {

  const {handleEdit, handleDelete, handleComplete, lists} = useContext(ContextTodo)

return (
    <div className="p-4">
    
      

      <ul className=" p-2 gap-3 m-2 flex">
        {lists.map((item, index)=>( <div key={index} className="gap-2 p-4 m-2 flex">
          <li >{item.title}</li>
          <li >{item.descrip}</li>
         <input type="checkbox" onChange={()=>handleComplete(index)}/>
      <div >{item.status ? 'completed' : 'pending'}</div>
          <div className=" flex gap-4">
          <button className="border" onClick={() => handleDelete(index)}>Delete</button>
          <button className="border" onClick={() => handleEdit(index)} >Edit</button>
          </div>
          
        </div>
         
           
      ))}
    </ul>
     </div>
  )
}

export default Todo
