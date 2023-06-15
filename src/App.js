import React from 'react';
import {Route, Routes,} from 'react-router-dom'
import store from './redux/configureStore';
import './App.css';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Provider store={store}>
      <section>
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path = "/details" element={<Details/>}/>          
        </Routes>
      </section>
    </Provider>
     );
}

export default App;
