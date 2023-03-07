import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useApi } from './hooks/use-api';


// pages & components
import Home from './pages/Home';


function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
            path="/" 
            element={<Home />} />

                </Routes>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
