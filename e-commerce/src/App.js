
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import {  Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Navbar></Navbar>

        <Routes>
          <Route exact path="/" element={<ProductList></ProductList>} />
          <Route exact path="/details" element={<Details></Details>} />
          <Route exact path="/cart" element={<Cart></Cart>} />
          <Route path="*" element={<Default></Default>} />
        </Routes>
      <Modal></Modal>
    </>
  );
}

export default App;
