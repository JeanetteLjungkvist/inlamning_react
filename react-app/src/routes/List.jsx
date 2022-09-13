import React, {useEffect} from 'react'
import { Navbar } from '../components';

const List = () => {
  useEffect(() => {
    document.title = "Todo List";
  }, []);
  return (
    <div>
<Navbar/>
    </div>
  )
}

export default List