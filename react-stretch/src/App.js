import React, { useState, Component } from 'react';
import AuthFlow from './views/AuthFlow';
import Jokes from './views/Jokes';

function App() {

  const [token, setToken] = useState(false);

  const storeToken = () => {
    setToken(!token);
  };

  return (
    <div className="App">
      <h3>Sprint Challenge - Authentication</h3>
      <AuthFlow storeToken={storeToken} />
      {token ? <Jokes /> : <p>Please sign in...</p>}
    </div>
  );
}

export default App;
