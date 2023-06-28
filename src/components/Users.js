import React, { useEffect, useState } from 'react';
import AddUser from './AddUser';
import { client } from '../myAxios';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Users = () => {

    const[users, setUsers] = useState([]);

    const fetchUsers = async () =>{
        const response = await client.get(``)
        setUsers(response.data)
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const handleDelete = async (id) => {
        await client.delete(`/${id}`)
        setUsers(users.filter((user) => user.id !== id))
    }

  return (
    <div style={{ margin: '10rem' }}>
        <AddUser setUsers={setUsers} />
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, i) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link to={`/edit/${user.id}`}>
                                    <Button>EDIT</Button>
                                </Link>
                                &nbsp;
                                <Button onClick={() => handleDelete(user.id)} style={{ backgroundColor:"red"}}>DELETE</Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
  )
}

export default Users