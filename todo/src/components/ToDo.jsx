import React from 'react'
import "../App.css"
const ToDo = ({todo,handleToggle,handleDelete}) => {

    // Function For handling OnClick Event  for Both Toggle and Delete Operations
 const handleClick = (e)=>{
 handleToggle(e.currentTarget.id)
 }

 const handleClick1 = (e)=>{
    handleDelete(e.currentTarget.id)
    }
  return (
        // Table like structure For showing the Tasks List
    <div class="Table">
        <div  id={todo.id}  className={todo.complete?'strike':''}>    📝{" "}{todo.task} </div>
        {/*Buttons for Handling Toggle and Delete Operations  */}
        <div className='Buttons'><button className={todo.complete?'button-11':'button-33'}  disabled={todo.complete} id={todo.id}  onClick={handleClick}>Completed</button>
        <button className='button-22' id={todo.id} onClick={handleClick1}>❌</button>    </div>
    </div>
  )
}

export default ToDo