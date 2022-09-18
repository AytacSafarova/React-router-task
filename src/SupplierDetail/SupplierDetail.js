import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import "./SupplierDetails.css";

function SupplierDetail() {
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  let { id } = useParams();
  const baseURL = "https://northwind.vercel.app/api/suppliers/";

  useEffect(() => {
    axios.get(baseURL + id).then((response) => {
      setDetail(response.data);
    });
  }, []);

  return (
    <div>
      <button className="go_back_button" onClick={() => navigate(-1)}>
        Go back
      </button>

      <h1>Supplier Details</h1>
      <table id="suppliers_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Company name</th>
            <th>Contact name</th>
            <th>Contact title</th>
            <th>City</th>
            <th>Region</th>
            <th>Postal Code</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr key={detail.id}>
            <td>{detail.id}</td>
            <td>{detail.companyName}</td>
            <td>{detail.contactName}</td>
            <td>{detail.contactTitle}</td>
            <td>{detail.address?.city}</td>
            <td>{detail.address?.region}</td>
            <td>{detail.address?.postalCode}</td>
            <td>{detail.address?.country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default SupplierDetail;
