import { useState, useEffect } from 'react';
import './App.css'

export default function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/Wladison-Maciel')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data)

  return (
    <h1></h1>
  );
}