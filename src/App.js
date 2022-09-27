import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import ShareLayout from './components/ShareLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShareLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/cocktails/:id" element={<SingleCocktail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
