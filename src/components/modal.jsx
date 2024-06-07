import React, { useState } from "react";
import { Modal } from "reactstrap";

const UserModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    year: "",
    color: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({
      name: "",
      price: "",
      year: "",
      color: "",
      brand: "",
    });
  };

  return (
    <div className="container">
      <Modal
        isOpen={open}
        toggle={onClose}
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div className="modal-header">
          <h1 className="text-center" id="modalTitle">
            Add Car
          </h1>
        </div>
        <div className="modal-body" id="modalDescription">
          <form onSubmit={handleSubmit} id="submit">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-control my-2"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="form-control my-2"
              value={form.price}
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="Year"
              name="year"
              className="form-control my-2"
              value={form.year}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Color"
              name="color"
              className="form-control my-2"
              value={form.color}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              className="form-control my-2"
              value={form.brand}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-success" type="submit" form="submit">
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;
