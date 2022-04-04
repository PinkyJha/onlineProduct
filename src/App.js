import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductList from "./containers/ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route>404 not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
