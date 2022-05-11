import { useEffect, useState } from "react";
import Home from './Pages/Home'
import ListExpensesIncome from './Pages/ListExpensesIncome';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { GlobalContextSavingsProvider } from './Context/GlobalContextSavings';
function App() {
  const [savings, setSavings] = useState(0);
 
  useEffect(() => {
    fetch('http://localhost:3001/test')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
    })
  }, []);

  return (
    <GlobalContextSavingsProvider value={{savings, setSavings} }>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/list" element={<ListExpensesIncome></ListExpensesIncome>}></Route>
        </Routes>
        </Router>
    </GlobalContextSavingsProvider>
  );
}

export default App;
