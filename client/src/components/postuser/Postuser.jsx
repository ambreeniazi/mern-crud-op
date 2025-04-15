import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Postuser = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
  });


  const navigate = useNavigate();
  const handlInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      const response = await fetch("http://localhost:3000/user/post-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }); 
      const data = await response.json();
      console.log(data);
       navigate("/");
     } catch (error) {
      console.log("error",error.message)
     }
  }
  return (
    <>
      <div className="mx-auto  max-w-md p-6 rounded-2xl shadow-lg  mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Post User</h2>
        <Form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Name:</label>
            <input
              type="text"
              placeholder="enter username"
              name="name"
              value={formData.name}
              onChange={handlInputChange}
              className="block w-full p-2  border border-slate-100  focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email:</label>
            <input
              type="text"
              placeholder="enter email"
              name="email"
              value={formData.email}
              onChange={handlInputChange}
              className="w-full p-2 rounded-md border border-slate-100  focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Contact no:</label>
            <input
              type="text"
              placeholder="enter phone no"
              name="phone"
              value={formData.phone}
              onChange={handlInputChange}
              className="w-full p-2 rounded-md border border-slate-100  focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};

export default Postuser;
