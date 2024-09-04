import React from 'react';
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div className="App">

      <Routes>
      <Route path="/home" element={<Navigate to="/" />} />

      {/* Redirect /post-list/:postId to /posts/:postId */}
      <Route path="/post-list/:postId" element={<Navigate to="/posts/:postId" />} />
      </Routes>

      <p>Header</p>
      <p>      <Link to='/todos'>Todo</Link>      </p>
      <p>      <Link to='/albums'>Album</Link>      </p>
     
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
