import {  useState } from "react";


const Todo = () => {

let [inputValue, setInputValue] = useState("")
let [descriptionValue, setDescriptionValue] = useState("")

let [lists, setLists] = useState([])


let [toBeEdited, setToBeEdited] = useState(null)



const handleAdd = () =>{

  if(toBeEdited !== null){
      let data = lists.map((item, index)=> {
        if( toBeEdited === index){
          return {...item, title:inputValue, descrip:descriptionValue }
        }

        return item
      } )

      setLists(data)
      
      setToBeEdited(null)
      setInputValue("")
  setDescriptionValue("")


 }else {
      
 
  setLists([...lists, {title:inputValue, descrip:descriptionValue,  status:false}])

  setInputValue("")
  setDescriptionValue("")
  }
}




function handleComplete(id){
 
  setLists((lists)=>{
return (
lists.map((item,index)=>{
  if(index === id){
   
return   {...item, status : !item.status}
  }
  return item
})
)})
}

const handleDelete = (index) =>{
   let removeItem = lists.filter((item, i)=> i !== index )
   setLists(removeItem)
}

// function handleEdit (index){
//    setToBeEdited(index)
//    setInputValue(lists[index].value)
//    setDescriptionValue(lists[index].value)
   
// }


function handleEdit(index){
  setToBeEdited(index)
  setInputValue(lists[index].title)
  setDescriptionValue(lists[index].descrip)
}


  

  return (
    <div className="p-4">
    
      <div className="flex gap-4 ">
        <input type="text" placeholder="Write Task Here "  value={inputValue}  onChange={(e)=>setInputValue(e.target.value)} />
         <input type="text" placeholder="description"  value={descriptionValue}  onChange={(e)=>setDescriptionValue(e.target.value)} />
      <button onClick={handleAdd} disabled={inputValue !== "" &&  descriptionValue !== "" ? false : true} className={`${inputValue !== "" &&  descriptionValue !== "" ? "bg-blue-600 cursor-pointer" : "bg-blue-400 cursor-not-allowed"}  text-white border `}>{toBeEdited !== null ? "Update" : "AddTask"}</button>
      </div>

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
