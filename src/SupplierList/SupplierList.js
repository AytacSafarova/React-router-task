import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./SupplierList.css";

function SupplierList() {
  const navigate = useNavigate();
  const [suppliers, setSuppliers] = useState([]);
  const baseURL = "https://northwind.vercel.app/api/suppliers";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSuppliers(response.data);
    });
  }, []);

  function deleteSupplier(id) {
    let filteredSupplier = suppliers.filter((item) => item.id !== id);
    setSuppliers(filteredSupplier);
  }

  return (
    <div>
      <button className="go_back_button" onClick={() => navigate(-1)}>
        Go back
      </button>

      <h1>Suppliers list</h1>

      <table id="suppliers_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Company name</th>
            <th>Contact name</th>
            <th>Contact title</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {suppliers &&
            suppliers.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>
                  <td>{item.contactTitle}</td>
                  <td onClick={() => deleteSupplier(item.id)}>Delete</td>
                  <td>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={`/detail/${item.id}`}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default SupplierList;
