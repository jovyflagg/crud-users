import React, { useState } from 'react'
import { client } from '../myAxios';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid/async';

const AddUser = (props) => {

  const initialValue = {
    name: "",
    email: "",
    phone: ""
  }
  const [user, setUser] = useState(initialValue);

  const handleOnChange = async (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    addUser();
  }

  const addUser = async (name, email, phone) => {
    const id = await nanoid();
    const newUser = {
        id,
        ...user
    }
    client.post(``, newUser)
    .then(() => {
      props.setUsers(prevData => ([
        user,
        ...prevData]))
    setUser(initialValue)
    })

  }
  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
        <h3>USER ID: {user.id}</h3>
        <Form.Group className='mb-3' controlId="formFirstname">
          <Form.Control
            name="name"
            type="text"
            placeholder='Name'
            value={user.name}
            required
            onChange={handleOnChange}>
          </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId="formLastname">
          <Form.Control
            name="email"
            type="email"
            placeholder='Email'
            value={user.email}
            required
            onChange={handleOnChange}>
          </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId="formFirstname">
                    <Form.Control
                        name="phone"
                        type="tel"
                        placeholder='Name'
                        value={user.phone}
                        required
                        onChange={handleOnChange}>
                    </Form.Control>
                </Form.Group>
        <Button type="submit" onClick={handleSubmit}>ADD</Button>
      </Form>
    </div>
  )
}

export default AddUser