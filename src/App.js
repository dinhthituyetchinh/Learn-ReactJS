import React from 'react';
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FormData from './components/Test_FE/components/Content/components/FormData';
import ListData from './components/Test_FE/components/Content/components/ListData';


function App() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="App">

      <Routes>

        <Route path="/home" element={<Navigate to="/" />} />

        {/* Redirect /post-list/:postId to /posts/:postId */}
        <Route path="/post-list/:postId" element={<Navigate to="/posts/:postId" />} />
      </Routes>

      <Header open={open} toggleDrawer={toggleDrawer} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <FormData />
      <ListData />






      <p>      <Link to='/todos'>Todo</Link>      </p>
      <p>      <Link to='/albums'>Album</Link>      </p>

      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
