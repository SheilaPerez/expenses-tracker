import styles from './App.module.css';
import { useEffect } from "react";
import Home from './Pages/Home'

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/test')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
    })
  }, []);

  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
