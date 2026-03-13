import { useState } from "react";


const Todo = () => {
 let [inputValue, setInputValue] = useState("")
 let [list, setList] = useState([])

function handleAdd(){
    setList([...list, inputValue])
    setInputValue(" ")
}


  return (
    <div>
      <input className=" border p-2 flex"  placeholder="enter your task" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <div className="flex gap-4 m-2">
        <button className="border px-2 py-1 " onClick={handleAdd}>Add task</button>
        <div>{inputValue}</div>
          <button className="border px-2 py-1">Edit</button>
            <button className="border px-2 py-1 ">Delete</button>
      </div>
      <div>{list.map((item)=>
     <div></div>
    )}</div>
    </div>
  )
}

export default Todo
