import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminLegalTips.css";

const API = "http://localhost:5000/api/tips";

function AdminLegalTips() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [emergencyHelpline, setEmergencyHelpline] = useState("");
  const [tips, setTips] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    const res = await axios.get(API);
    setTips(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, category, description, emergencyHelpline };

    if (editId) {
      await axios.put(`${API}/${editId}`, payload);
    } else {
      await axios.post(API, payload);
    }

    setTitle("");
    setCategory("");
    setDescription("");
    setEmergencyHelpline("");
    setEditId(null);
    fetchTips();
  };

  const handleEdit = (tip) => {
    setTitle(tip.title);
    setCategory(tip.category);
    setDescription(tip.description);
    setEmergencyHelpline(tip.emergencyHelpline);
    setEditId(tip._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTips();
  };

  return (
    <div className="admin-container">
      <div className="admin-form">
        <h2>{editId ? "Edit Legal Tip" : "Add Legal Tip"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Category (e.g., Arrest Rights, Women’s Rights)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Emergency Helpline (e.g., 100 / 112)"
            value={emergencyHelpline}
            onChange={(e) => setEmergencyHelpline(e.target.value)}
            required
          />
          <button type="submit">{editId ? "Update" : "Add"}</button>
        </form>
      </div>

      <div className="admin-list">
        <h2>Manage Legal Tips</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Helpline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id}>
                <td>{tip.title}</td>
                <td>{tip.category}</td>
                <td>{tip.description}</td>
                <td>{tip.emergencyHelpline}</td>
                <td>
                  <button 
  onClick={() => handleEdit(tip)} 
  style={{ backgroundColor: "green", color: "white", padding: "6px 12px", border: "none", borderRadius: "4px", cursor: "pointer" }}
>
  Edit
</button>

<button 
  onClick={() => handleDelete(tip._id)} 
  style={{ backgroundColor: "red", color: "white", padding: "6px 12px", border: "none", borderRadius: "4px", cursor: "pointer" }}
>
  Delete
</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminLegalTips;
