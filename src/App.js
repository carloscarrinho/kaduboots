import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* put the header component here */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
