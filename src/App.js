import logo from './logo.svg';
import './App.css';
import { WebAuthn } from '@darkedges/capacitor-native-webauthn';

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './Home';
import About from './About';
import Share from './ShareSheet';

function App() {

  const passkey = async () => {
    return await WebAuthn.isWebAuthnAvailable();
  }

  const RouteProvider = () => {
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/about',
            element: <About />,
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
