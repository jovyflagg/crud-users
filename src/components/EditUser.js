import React, { useEffect, useState } from 'react'
import { client } from '../myAxios';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

  const history = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    firstname: "",
    lastname: ""
})

const fetchUser = async () => {
  const response = await client.get(`/${id}`)
  setUser(response.data)
};

useEffect(() => {
  fetchUser();
}, [])

const handleSubmit = async (e) => {
  e.preventDefault()
  await client.put(`/${id}`, user)
  history('/');
}

const handleOnChange = async (event) => {
  const { name, value } = event.target
  setUser((prevUser)=> ({
      ...prevUser,
      [name]: value
  }))
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
        <Button type="submit" onClick={handleSubmit}>UPDATE</Button>
      </Form>
    </div>
  )
}

export default EditUser