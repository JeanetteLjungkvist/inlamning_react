import React, {useState} from "react";
import {ListItem, UnorderedList} from '@chakra-ui/react'
import "./styles.css"

const TodoList = () => {

    const [todos, setTodos] = useState([
        {
            todo: 'Walk the dogs', 
        },
        {
            todo: 'Grocery Shopping', 
        },
        {
            todo: 'Buy flowers', 
        },
        {
            todo: 'Post a letter', 
        },
        {
            todo: 'Do laundry', 
        },
    ])
    const addTodo = (todo => {
        setTodos([...todos, {todo}])
    })

  return (
    <div >
    <h1 className="todo-list">Todo List</h1> 
        <Form addTodo={addTodo}/>
        <UnorderedList className="ul-list">
            { todos.map(t => {
                return(
                    <ListItem className="li-list" key={t.todo}>
                        <span className="star">&#9733;</span>
                        <span className="todo-item">{""} {t.todo}</span>
                    </ListItem>
                )
            })}
        </UnorderedList>
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
    
    <form className="todo-input" onSubmit={submitTodo}>
    <input
    type="text"
    placeholder="Add Todo"
    value={todo}
    onChange={(todosItem) => setTodo(todosItem.target.value)}
    />
    <input type="submit" value="Add Todo"/>

    </form>
  </div>
)
}

export default TodoList