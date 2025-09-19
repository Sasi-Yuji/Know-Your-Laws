import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminProducts.css";

const API = "http://localhost:5000";

function AdminProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [permits, setPermits] = useState([
    { name: "", estimatedCostINR: "", validityYears: "", whereToApply: "" },
  ]);
  const [cards, setCards] = useState([]);

  const [editingId, setEditingId] = useState(null); 

  useEffect(() => {
    axios
      .get(`${API}/api/businesses`)
      .then((res) => setCards(res.data))
      .catch(console.error);
  }, []);

  const addPermitRow = () => {
    setPermits([
      ...permits,
      { name: "", estimatedCostINR: "", validityYears: "", whereToApply: "" },
    ]);
  };

  const removePermitRow = (index) => {
    const updated = permits.filter((_, i) => i !== index);
    setPermits(updated);
  };

  const handlePermitChange = (index, field, value) => {
    const updated = [...permits];
    updated[index][field] = value;
    setPermits(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    if (image) fd.append("image", image);
    fd.append("permits", JSON.stringify(permits));

    try {
      if (editingId) {
        const { data } = await axios.put(`${API}/api/businesses/${editingId}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setCards((prev) => prev.map((c) => (c._id === editingId ? data : c)));
        setEditingId(null);
      } else {
        const { data } = await axios.post(`${API}/api/businesses`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setCards((prev) => [data, ...prev]);
      }

      resetForm();
    } catch (err) {
      console.error(err);
      alert("Failed to save business card");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setPermits([{ name: "", estimatedCostINR: "", validityYears: "", whereToApply: "" }]);
    const fileInput = document.getElementById("biz-image-input");
    if (fileInput) fileInput.value = "";
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this business?")) return;
    try {
      await axios.delete(`${API}/api/businesses/${id}`);
      setCards((prev) => prev.filter((c) => c._id !== id));
      if (editingId === id) resetForm();
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  const handleEdit = (card) => {
    setEditingId(card._id);
    setTitle(card.title);
    setDescription(card.description);
    setPermits(card.permits?.length ? card.permits : [
      { name: "", estimatedCostINR: "", validityYears: "", whereToApply: "" },
    ]);
    setImage(null); 
    const fileInput = document.getElementById("biz-image-input");
    if (fileInput) fileInput.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="admin-container">
      <div className="content-wrapper">
        <div className="form-section">
          <h2>{editingId ? "Edit Business Card" : "Add Business Card"}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              id="biz-image-input"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />

            <h3>Permits</h3>
            {permits.map((p, idx) => (
              <div key={idx} className="permit-row">
                <input
                  type="text"
                  placeholder="Permit Name"
                  value={p.name}
                  onChange={(e) => handlePermitChange(idx, "name", e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Estimated Cost (INR)"
                  value={p.estimatedCostINR}
                  onChange={(e) => handlePermitChange(idx, "estimatedCostINR", e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Validity (Years)"
                  value={p.validityYears}
                  onChange={(e) => handlePermitChange(idx, "validityYears", e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Where to Apply (URL/Text)"
                  value={p.whereToApply}
                  onChange={(e) => handlePermitChange(idx, "whereToApply", e.target.value)}
                  required
                />
                {permits.length > 1 && (
                  <button type="button" onClick={() => removePermitRow(idx)}>
                    
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addPermitRow} className="btn-add-permit">
               Add Permit
            </button>

            <button type="submit" className="btn-create">
              {editingId ? "Update" : "Create"}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="btn-cancel">
                Cancel
              </button>
            )}
          </form>
        </div>

        <div className="table-section">
          <h2>Manage Businesses</h2>
          <table>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Permits</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cards.length === 0 ? (
                <tr><td colSpan="6">No business cards yet.</td></tr>
              ) : (
                cards.map((card, i) => (
                  <tr key={card._id}>
                    <td>{i + 1}</td>
                    <td>
                      {card.image ? (
                        <img
                          src={`${API}/uploads/${card.image}`}
                          alt={card.title}
                          width="50"
                          height="50"
                          style={{ objectFit: "cover", borderRadius: 6 }}
                        />
                      ) : ("—")}
                    </td>
                    <td>{card.title}</td>
                    <td>{card.description}</td>
                    <td>
                      <ul>
                        {card.permits?.map((p, idx) => (
                          <li key={idx}>
                            <strong>{p.name}</strong> - ₹{p.estimatedCostINR} ({p.validityYears} yrs)
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button className="btn-edit" onClick={() => handleEdit(card)}>Edit</button>
                      <button className="btn-delete" onClick={() => handleDelete(card._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
