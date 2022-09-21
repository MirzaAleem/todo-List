import React , { useEffect, useState } from 'react';
import Todo from './Component/Todo';


const getLocalItem = ()=>{
  let items = localStorage.getItem('list');
  if(items){
    return JSON.parse(items)
  }
  else{
    return []
  }
}

function App() {
  const [task, setTask] = useState('');
  const [data,setData] = useState(getLocalItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task===""){
      alert("Empty Task !!")
    }
    else{
    const newData=task;
    setData([...data,newData]);
    setTask("");
    }
    
  }
  
  const deleteItem =(a)=>{
     const filtered_arr = data.filter((_item,index)=>{
      return index !== a;
     })
     setData(filtered_arr);
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(data))
  },[data])
  
  return (
    <div className="App">
      <header className='header'>Todo App</header>
      <form onSubmit={handleSubmit}>
        <div>
        <input 
          type="text" 
          value={task}
          placeholder='Enter some task'
          onChange={(e) =>{
            setTask(e.target.value)}}
        />
       <button className='btn btn-danger' id="btn" type="submit">+</button>
       </div>
      </form>
      {
       data.map((value,index)=>{
        return(
        <Todo 
        key={index.toString}
        id={index}
        task={value}
        onSelect={deleteItem}
        />)}
       )
      }
    
    
    </div>
  );

}

export default App;