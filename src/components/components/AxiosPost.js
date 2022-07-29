import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";


const AxiosPost = () => {
  const [posts , setPosts] = useState({ blogs: [] });

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, [setPosts]);

  function selectUser(id) {
    console.warn(users[id - 1])
    let item = users[id - 1]
  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
    setMobile(item.mobile)
    setEmail(item.email)
        setEmail(item.email)
        setMobile(item.mobile);
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,mobile,email}
    console.warn("item",item)
    fetch(`http://localhost:4000/todo/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }

  return (
    <div className="axios">
      <h1>Delete User With API </h1>
      <h1>Update User Data With API </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
            <th>address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>

          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.street},{item.address.city},{item.address.zipcode},{item.address.geo.lat}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name},{item.company.catchPhrase},{item.company.bs}</td>
                <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={()=>updateUser(item.id)}>Update</button></td>
                
                
              </tr>
            ))}
        </tbody>
      </Table>
      
    </div>
    
  );
};
}
export default AxiosPost;
