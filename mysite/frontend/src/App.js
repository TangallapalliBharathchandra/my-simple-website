import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');  // Define state for message
  const [status, setStatus] = useState('');    // Define state for status

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/greet/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);  // Update state with fetched message
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setMessage('Failed to fetch message');  // Error handling
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/status/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStatus(data.status);    // Update state with fetched status
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setStatus('Failed to fetch status');  // Error handling
    }
  };

  return (
    <div className="App">
      <h1>Welcome to My Simple Website</h1>
      <button onClick={fetchMessage}>Get Greeting</button>
      <p>{message}</p>
      <button onClick={fetchStatus}>Get Status</button>
      <p>{status}</p>
    </div>
  );
}

export default App;
