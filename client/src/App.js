import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useApi } from './hooks/use-api';



// pages & components
import Home from './pages/Home';
import Exams from './pages/Exams';


function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <Router>
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/exams" element={<Exams />} />


                </Routes>
            </div>
      </Router>
    </div>
  );
}

export default App;
