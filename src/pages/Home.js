import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([])

    const {id} = useParams()

    useEffect(()=>{
        //console.log("Code With Kayle.");
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users")
        console.log(result.data)
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((users,index)=>(
         <tr>
         <th scope="row" key={index}>{index+1}</th>
         <td>{users.name}</td>
         <td>{users.username}</td>
         <td>{users.email}</td>
         <td>
            <button className='btn btn-primary mx-2'>View</button>
            <Link
              className='btn btn-outline-primary mx-2'
              to={`/edituser/${users.id}`}
            >
              Edit
              </Link>
            <button className='btn btn-danger mx-2'
            onClick={()=>deleteUser(users.id)}
            >Delete</button>
         </td>
      </tr>
        ))
    }

    
    
  </tbody>
</table>    
        </div>   
    </div>
  )
}
