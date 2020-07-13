import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <nav style={{ backgroundColor: 'gray', height: '45px', paddingTop: '10px', width: '100%', position: 'fixed' }}>
        <center>
          <Link to="/" style={{ padding: '50px', color: 'white',textDecoration:'none',fontFamily:'bold'}}>Product</Link>
          <Link to="/Cart" style={{ color: 'white',textDecoration:'none',fontFamily:'bold' }}>Cart</Link>
        </center>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="Cart" element={<Cart />}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;