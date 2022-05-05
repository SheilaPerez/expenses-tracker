import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/test')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
    })
  }, []);

  return (
    <div className="App">
      Content
    </div>
  );
}

export default App;
