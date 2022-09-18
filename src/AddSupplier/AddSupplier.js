import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./style.css";

function AddSupplier() {
  const navigate = useNavigate();
  const [newSupplier, setNewSupplier] = useState({
    id: "",
    companyName: "",
    contactName: "",
    contactTitle: "",
    address: {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    },
  });

  function AddNewSupplier() {
    const baseURL = "https://northwind.vercel.app/api/suppliers";
    axios.post(baseURL, newSupplier);
  }
  
  return (
    <>
      <div className="add_list_container">
        <button className="go_back_button" onClick={() => navigate(-1)}>
          Go back
        </button>
        <div>
          <label>Id:</label>
          <input
            value={newSupplier.id}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, id: e.target.value })
            }
          />
        </div>
        <div>
          <label>Company name:</label>
          <input
            type="text"
            value={newSupplier.companyName}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, companyName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Contact name:</label>
          <input
            type="text"
            value={newSupplier.contactName}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, contactName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Contact title:</label>
          <input
            type="text"
            value={newSupplier.contactTitle}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, contactTitle: e.target.value })
            }
          />
        </div>

        <button className="addbtn" onClick={() => AddNewSupplier()}>
          Add Supplier
        </button>
      </div>
    </>
  );
}

export default AddSupplier;
