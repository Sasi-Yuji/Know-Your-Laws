import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminBasicRights() {
  const [rights, setRights] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [steps, setSteps] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchRights = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/rights");
      setRights(res.data);
    } catch (err) {
      console.error(" Error fetching rights:", err);
    }
  };

  useEffect(() => {
    fetchRights();
  }, []);

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const addStepField = () => {
    setSteps([...steps, ""]);
  };

  const removeStepField = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newRight = {
      title,
      description,
      tag,
      steps: steps.filter((s) => s.trim() !== ""),
    };

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/rights/${editId}`, newRight);
        setMessage(" Right updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/rights", newRight);
        setMessage(" Right added successfully!");
      }

      setTitle("");
      setDescription("");
      setTag("");
      setSteps([""]);
      setEditId(null);

      fetchRights();
    } catch (err) {
      setMessage(" Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (right) => {
    setEditId(right._id);
    setTitle(right.title);
    setDescription(right.description);
    setTag(right.tag || "");
    setSteps(right.steps?.length ? right.steps : [""]);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Right?")) {
      try {
        await axios.delete(`http://localhost:5000/api/rights/${id}`);
        setMessage(" Right deleted successfully!");
        fetchRights();
      } catch (err) {
        setMessage(" Error: " + (err.response?.data?.message || err.message));
      }
    }
  };

  return (
    <div className="container mt-4">
      {message && <div className="alert alert-info">{message}</div>}

      <div className="row">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">
              {editId ? " Edit Right" : " Add New Right"}
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter right title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Tag / Category</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., Education, Consumer Rights"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Steps</label>
                {steps.map((step, index) => (
                  <div key={index} className="d-flex mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Step ${index + 1}`}
                      value={step}
                      onChange={(e) => handleStepChange(index, e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-danger ms-2"
                      onClick={() => removeStepField(index)}
                      disabled={steps.length === 1}
                    >
                      
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-outline-primary mt-2"
                  onClick={addStepField}
                >
                  + Add Step
                </button>
              </div>

              <button
                type="submit"
                className={`btn ${editId ? "btn-warning" : "btn-success"} mt-3`}
                disabled={loading}
              >
                {loading
                  ? "Saving..."
                  : editId
                  ? "Update Right"
                  : "Save Right"}
              </button>
              {editId && (
                <button
                  type="button"
                  className="btn btn-secondary ms-2 mt-3"
                  onClick={() => {
                    setEditId(null);
                    setTitle("");
                    setDescription("");
                    setTag("");
                    setSteps([""]);
                  }}
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3"> Manage Rights</h4>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>SL No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Steps</th>
                    <th>Tag</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rights.map((right, index) => (
                    <tr key={right._id}>
                      <td>{index + 1}</td>
                      <td>{right.title}</td>
                      <td>{right.description}</td>
                      <td>
                        <ol>
                          {right.steps?.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ol>
                      </td>
                      <td>{right.tag}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => handleEdit(right)}
                        >
                           Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(right._id)}
                        >
                           Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {rights.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No rights found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBasicRights;
