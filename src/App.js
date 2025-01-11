import React, { useState } from 'react';
import './App.css'; // Pastikan untuk membuat file ini jika belum ada

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={toggleText}
        style={{
          backgroundColor: isVisible ? 'red' : 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {isVisible ? 'Merah' : 'Biru'}
      </button>
      {isVisible && <h1>Hello World</h1>}
    </div>
  );
}

export default App;
