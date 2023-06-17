import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from './components/Details';
import Navbar from './components/Navbar';
import store from './redux/store';
import Homepage from './components/Homepage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          {/* <Route path="/details" element={<Homepage />} /> */}
          <Route path="/countries/:country" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
