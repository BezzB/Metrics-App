import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Covid from './components/Covid';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" exact element={<Covid />} />
        <Route path="/details" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
    </Provider>
    
  );
}

export default App;
