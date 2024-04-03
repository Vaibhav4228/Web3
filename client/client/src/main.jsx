import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { createThirdwebClient, getContract } from "thirdweb";
import { StateContextProvider } from './context';
import App from './App';
import './index.css';

// Define the desired chain ID
const chain = 'sepolia'; // Assuming 'sepolia' is a valid chain name

// Create Thirdweb client
const client = createThirdwebClient({
  clientId: "3d1b2fc57b12a0c7cb556032cdad6d60"
});

// Connect to the contract
const contract = getContract({
  client,
  chain,
  address: "0x543aC12D4920b3c2F6DA138786eeDd1E94C904AF"
});

// Render the application
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="ethereum" clientId="3d1b2fc57b12a0c7cb556032cdad6d60">
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
