import logo from './logo.svg';
//import './App.css'

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Intro from './Intro';
import Home from './Home';
import About from './About';
import Share from './ShareSheet';
import Passkeys from './Passkeys';

function App() {

  const RouteProvider = () => {
    const routes = [
        {
            path: '/',
            element: <Intro />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
          path: '/home',
          element: <Home />,
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