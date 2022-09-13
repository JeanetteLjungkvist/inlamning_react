import React, {useEffect} from 'react'
import { Navbar, TodoList} from '../components';

const List = () => {
  useEffect(() => {
    document.title = "Todo List";
  }, []);
  return (
    <div>
      <Navbar/>
      <TodoList/>
    </div>
  )
}

export default List