import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoFeature from './components/Feature/Todo';
import AlbumFeature from './components/Feature/Album';
import ListPage from './components/Feature/Todo/pages/ListPage';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
// v6
    errorElement: <NotFound />,
    children: [
      {
        path: "/todos",
        element: <TodoFeature />,
      },
      {
        path: "/albums",
        element: <AlbumFeature />,
      },
      // nested router
      {
        path: "/list-page",
        element: <ListPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
