import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => setData(res) )
  },[])
  // console.log(data[0])
  return (
  <>
  <div className="container">
  {data.length>0&&data.map((item)=>{
      return (<div><p>Sr.no :- {item.id}</p><div>Title :- {item.title}</div></div>)
     })}
     </div>
     
  </>
  );
}

export default App;
