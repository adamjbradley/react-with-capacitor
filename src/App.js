import logo from './logo.svg';
import './App.css';

//import * as React from "react";
import { useState } from 'react';
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './Home';
import About from './About';
import Share from './ShareSheet';
import Passkeys from './Passkeys';

function App() {

  const RouteProvider = () => {
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
          path: '/passkeys',
          element: <Passkeys />,
      }

    ];
    return <RouterProvider router={createBrowserRouter(routes)} />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <RouteProvider />
      </header>
    </div>
  );
}

export default App;