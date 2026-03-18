

import { useState } from 'react'
import './App.css'
import Todo from './componets/Todo'
import { ContextTodo } from './componets/ContextTodo'



type Todo = {
title : string
descrip : string 
status : boolean
}


function App() {

  let [lists, setLists] = useState<Todo[]>([])


let [toBeEdited, setToBeEdited] = useState< number | null> (null)

  let [inputValue, setInputValue] = useState<string>("")
  let [descriptionValue, setDescriptionValue] = useState<string>("")


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





function handleComplete(id: number){
 
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


const handleDelete = (index: number) =>{
   let removeItem = lists.filter((item, i)=> i !== index )
   setLists(removeItem)
}

// function handleEdit (index){
//    setToBeEdited(index)
//    setInputValue(lists[index].value)
//    setDescriptionValue(lists[index].value)
   
// }


function handleEdit(index: number){
  setToBeEdited(index)
  setInputValue(lists[index].title)
  setDescriptionValue(lists[index].descrip)
}





  return (
    
  <ContextTodo.Provider  value={{handleEdit, handleDelete, handleComplete, lists}}>
      <div>
        <div className="items-center justify-center p-8 text-black font-bold">Task </div>
        <div className="flex gap-4 ">
        <input type="text" placeholder="Write Task Here "  value={inputValue}  onChange={(e)=>setInputValue(e.target.value)} />
         <input type="text" placeholder="description"  value={descriptionValue}  onChange={(e)=>setDescriptionValue(e.target.value)} />
      <button onClick={handleAdd} disabled={inputValue !== "" &&  descriptionValue !== "" ? false : true} className={`${inputValue !== "" &&  descriptionValue !== "" ? "bg-blue-600 cursor-pointer" : "bg-blue-400 cursor-not-allowed"}  text-white border `}>{toBeEdited !== null ? "Update" : "AddTask"}</button>
      </div>
       
       <Todo  />
      </div>
     
  </ContextTodo.Provider>  
  )
}

export default App
