import React from "react";
 function Todo(props) {

    const complete = ()=>{
        document.getElementById(props.id).style.textDecorationLine="line-through";
    }

    return(
        <div className="container">
        <div className="row">
            
            <div className="col-4">
            <h4 id={props.id}>{props.task}</h4></div>
            
            <h6 className="col-4 ">
                <button id="compBtn" className='btn btn-success' onClick={complete} >completed</button>
            </h6>

            <h6 className="col-4 ">
                <button className='btn btn-danger' onClick={()=>{
                    props.onSelect(props.id)
                    }}>Delete</button>
            </h6>           
        </div>
        </div>
    ) 
}

export default Todo;