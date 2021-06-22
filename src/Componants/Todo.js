import React, { useState } from 'react';
import { addTodo, deleteTodo } from '../actions';
import {useSelector, useDispatch } from 'react-redux'
// import {todoReducer} from '../reducers/todoReducer';
import "./todo.css";

const Todo = () => {
 
    const [inputData, setInputData] = useState("");
    const list =useSelector((state)=> state.todoreducer.list)
    const dispatch = useDispatch();

    return (
        <React.Fragment>
             <div className="main-div">
        <div className="child-div">
        <h2>
              Add Your TODO List
              </h2>
          <div className="add-item">
            <input type="text" className="form-control"  placeholder="add item here" value={inputData} onChange={(event)=>{
             setInputData(event.target.value);
            }} />
            <button className="btn btn-sm bg-success text-white" onClick={()=>dispatch(addTodo(inputData), setInputData(''))}>Add</button>
 </div>
 <div className="showItems">
     {list.map((elem)=>{
         return(
        <div className="eachItem" key={elem.id}>
         <h3>{elem.data}</h3>
         <button className="btn btn-sm " onClick={()=>dispatch(deleteTodo(elem.id))}>Delete</button>
     </div>
         )
         
     })
     
     }
      
     

 </div>

        </div>

      </div>
        </React.Fragment>
    )
}

export default Todo;
