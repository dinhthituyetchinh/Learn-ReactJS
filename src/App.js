import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';



function App() {

  return (
    <div className="App">
      <p>Header</p>
      <p>      <Link to='/todos'>Todo</Link>      </p>
      <p>      <Link to='/albums'>Album</Link>      </p>

      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
