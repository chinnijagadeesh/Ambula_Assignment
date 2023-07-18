import './App.css';
import data from "./data.json"
import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
function App() {
  // Getting data from localstorage or Personal json data
  const data1 = (JSON.parse(localStorage.getItem('TodoList')))
  const [list,setList]= useState(data1||data)
  const [value,setValue] = useState('')
  const [count,setCount] = useState(0)

  // Counting Total no.of completions
 useEffect(()=>{
    let res = list.filter(task=>{
      return task.complete==true
    }) 
    setCount(res.length)
 },[list])

//  Adding New task to the List
  const handleAddTask = (value) =>{
    let res = [...list]
    let id = res.length>0?res[res.length-1].id:1
    res = [...res,{id: id+1,
    task: value,
    complete: false}]
  setList(res)
  localStorage.setItem("TodoList",JSON.stringify(res))
  }

  // Function For handling Toggle State
  const handleToggle = (id) =>
  {
    let res = list.map(task=>{
      return task.id==Number(id)?{...task,complete:!task.complete}:{...task}
    }) 
    localStorage.setItem("TodoList",JSON.stringify(res))
  setList(JSON.parse(localStorage.getItem('TodoList')))
  }

  // Function For Delete operation
  const handleDelete = (id) =>
  {
    let res = list.filter(task=>{
      return task.id!==Number(id)
    }) 
    localStorage.setItem("TodoList",JSON.stringify(res))
    setList(JSON.parse(localStorage.getItem('TodoList')))
  }

  return (
    <div className="App">

      {/* ToDo List Heading */}
      <header className="Todo-header">      
       TODO - LIST
      </header>

      {/* TaskBar Section */}
      <div class="TaskBar">
         <input disabled type="text" name="" id="" value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="What needs to be done"
            className="todo-item-edit" autoFocus
            onKeyUp={(event) => {
              if (event.key === 'Enter'&&value.length>0) {
                handleAddTask(value)
              } else if (event.key === 'Escape') {
                setValue('')
              }
            }}
          />
      <div>

            {/* Showing Data in a Table form */}
      <div className='taskTable'>
        {list.map((todo)=>{
          return (<ToDo id={todo.id} handleToggle={handleToggle}  handleDelete={handleDelete} todo={todo}/>)
        })}
        </div>
       
        <div class="TaskBar">
         <input type="text" name="" id="" value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="What needs to be done"
            className="todo-item-edit" autoFocus
            onKeyUp={(event) => {
              if (event.key === 'Enter'&&value.length>0) {
                handleAddTask(value)
              } else if (event.key === 'Escape') {
                setValue('')
              }
            }}
          />
      <div>
      </div>
      </div>
      </div>

      {/* Total Count of TodoList and Complete Task Shown in Buttons */}
      <div className='todoCount'>
          <button disabled className='button-44 teal'> Completed Tasks : {count}</button>
          <button disabled className='button-44 blue'>Total no.of Tasks: {list.length}</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
