import React from 'react';
import { userState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useApi } from './hooks/use-api';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';




// pages & components
import Home from './pages/Home';
import Exams from './pages/Exams';
import Admin from './pages/Admin';


function App() {


  const { response } = useApi();

  return (
    <div className="App">
      <Router>
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/admin" element={<Admin />} />


                </Routes>
            </div>
      </Router>
    </div>
  );
}

export default App;
