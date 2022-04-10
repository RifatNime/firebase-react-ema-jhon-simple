import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';




function App() {

  // search input and btn
  const [result, setSearchResult] = useState("");

  const handleSearch = (input) => {
      setSearchResult(input);
      setSearchInput(setSearchInput({
          input: ''
      }));
  }
  const [input, setSearchInput] = useState({
      input: ''
  });
  const handleChange = (e) => {
      setSearchInput({
          ...input,
          [e.target.name]: e.target.value
      });
  }

  return (
    <div className="">
      <Header
        handleSearch={handleSearch}
        handleChange={handleChange}
        input={input}
      ></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
