import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList(){

    //add new todo in array
    let [todos,setTodos] = useState([{task: "sample-task", id: uuidv4(),isDone : false}]);
    let [newTodo,setNewTodo] = useState([""]);
    let addNewTask = ()=>{
       setTodos((prevTodos) => {
        return [...prevTodos,{task: newTodo,id: uuidv4(),isDone:false}];
       });
       setNewTodo("");
    };
    let updateTodoValue = (event) =>{
       setNewTodo(event.target.value);
    };

    //delete single todo
    let deleteTodo = (id) =>{
        //console.log(id);
        setTodos((prevTodos) =>  todos.filter((prevTodos) => prevTodos.id != id) );
       
    }

    //upper case all todo and mark as all done
    let markAsAllDone = () => {
        setTodos( (prevTodos)=> (
         prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
                isDone: true,
            }
    })));
        
    }

    //upper case single todo or done feature
    let markAsDone = (id) => {
        setTodos( (prevTodos)=> (
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                        isDone:true,
                    }
                }else{
                    return todo;
                }
       })));
    }

    return(
        <div>
            <h4>Todo List</h4>
           
            <input type="add a task" value={newTodo} onChange={updateTodoValue}/>
            &nbsp;&nbsp;
            <button className="addtask" onClick={addNewTask}>Add Task</button>
           
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) =>{
                        
                        return <li key={todo.id}>
                            <span style={todo.isDone  ? {textDecorationLine: "line-through"} : {}}>
                                {todo.task}
                            </span> 
                            &nbsp;&nbsp;
                            <button className="delete" onClick={() => deleteTodo(todo.id)}>delete</button>
                            &nbsp;&nbsp;
                            <button className="done" onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                            <br /><br />
                        </li> ;
                        
                    })
                }
               
            </ul>

            <br /><br />
            <button className="done" onClick={markAsAllDone}>Mark As all Done</button>
        </div>
    );
}

export default TodoList;