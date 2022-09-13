import React, {useState} from "react";
import {ListItem, OrderedList} from '@chakra-ui/react'

const TodoList = () => {

    const [todos, setTodos] = useState([
        {
            todo: 'todo1', 
        },
        {
            todo: 'todo2', 
        },
        {
            todo: 'todo3', 
        },
    ])
    const addTodo = (todo => {
        setTodos([...todos, {todo}])
    })

  return (
    <div>
    <h2>Todo List</h2>
    
        <OrderedList>
            { todos.map(t => {
                return(
                    <ListItem key={t.todo}>{t.todo}
                    </ListItem>
                )
            })}
            
        </OrderedList>
        <Form addTodo={addTodo}/>
        
    </div>
  )
}

const Form = ({addTodo}) => {
    const [todo, setTodo] = useState("")
    const submitTodo = (todosItem) => {
    todosItem.preventDefault()
    addTodo(todo)
    }

return(
    <div>
    
    <form onSubmit={submitTodo}>
    <input
    type="text"
    placeholder="Add Todo"
    value={todo}
    onChange={(todosItem) => setTodo(todosItem.target.value)}
    />
    <input type="submit" value="Add Todo">
    
    </input>

    
    </form>
  </div>
)
}

export default TodoList