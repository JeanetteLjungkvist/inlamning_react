import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
            <h3 class="title">My React App</h3>
             <nav>
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/list">Todo List</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
