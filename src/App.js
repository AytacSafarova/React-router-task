import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import HomePage from "./HomePage/Home";
import AddSupplier from "./AddSupplier/AddSupplier";
import SupplierDetail from "./SupplierDetail/SupplierDetail";
import SupplierList from "./SupplierList/SupplierList";
import "../src/App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/list">
              List
            </Link>
          </li>
          <li>
            <Link className="link" to="/add">
              Add
            </Link>
          </li>
          <li>
            <Link className="link" to="/detail">
              Detail
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<SupplierList />} />
        <Route path="/add" element={<AddSupplier />} />
        <Route path="/detail/:id" element={<SupplierDetail />} />
      </Routes>
    </>
  );
}

export default App;
