import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers]= useState([]);
  const navigate = useNavigate();


  const getAllUsers =  async ()=>{
    try {
      const res = await fetch("http://localhost:3000/user/getAll-user");
      const data = await res.json();
      setUsers(data?.users);
    } catch (error) {
      console.log(error.message,"there is an error to fetching all usres")
    }
  }

  useEffect(()=>{
    getAllUsers();
  },[]);
 
  const handleUpdate=(userid)=>{
    navigate(`/user/${userid}`);
  }
  
  const handleDelete = async(id)=>{
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;
   try
   {const res =await fetch(`http://localhost:3000/user/delete-user/${id}`,{
        method:"Delete" 
    })
    if (res.ok) {
      console.log("Item deleted successfully");
      getAllUsers();
    } else {
      console.error("Failed to delete item");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
  return (
     <>
   <div className="container mx-auto p-4">
  <h2 className="text-xl border-b shadow-sm font-bold mb-2">User List</h2>
  <table className="min-w-full border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Email</th>
        <th className="py-2 px-4 border-b">Phone</th>
        <th className="py-2 px-4 border-b">Action</th>
        <th className="py-2 px-4 border-b">Action</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(users) && users.length > 0 ? (
        users.map((user, i) => (
          <tr key={i} className="text-center">
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">{user.phone}</td>
            <td className='py-2 px-4 border-b'>
            <button  onClick={()=>handleUpdate(user._id)} className='rounded-md bg-gray-800 text-white p-1 cursor-pointer hover:bg-gray-600'>update</button></td>
           <td className='py-2 px-4 border-b'><button  onClick={()=>handleDelete(user._id)} className='rounded-md bg-gray-800 text-white p-1 cursor-pointer hover:bg-red-600'>delete</button></td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="3" className="py-2 px-4 border-b text-center">
            No users found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
    </>
  );
}

export default Dashboard;
