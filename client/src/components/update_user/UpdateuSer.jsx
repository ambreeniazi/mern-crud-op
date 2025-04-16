import React ,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import {Form} from 'react-bootstrap';

const UpdateUser = () => {
  const {id} = useParams();
  const [formData, setformData] = useState({
      name: "",
      email: "",
      phone: "",
    });

    const handlInputChange = (e) => {
      const { name, value } = e.target;
      setformData({
        ...formData,
        [name]: value,
      });
    };

     useEffect(()=>{
        const fetchUser =  async ()=>{
          try {
            const res = await fetch(`http://localhost:3000/user/single-user/${id}`);
            const data = await res.json();
              setformData(data?.user);
          } catch (error) {
            console.log(error.message,"there is an error to fetching all usres")
          }
        }
        fetchUser();
      },[id]);
  return (
    <>
      <div className="mx-auto  max-w-md p-6 rounded-2xl shadow-lg  mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Update-User</h2>
        <Form>
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
            update-user
          </button>
        </Form>
      </div>
    </>
  );
}

export default UpdateUser;
