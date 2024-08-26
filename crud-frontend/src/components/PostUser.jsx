import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./css/postUser.css"

const PostUser = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/user", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json(response)
            console.log(data)
            navigate("/deshboar")

        } catch (error) {
            console.log(error.message);

        }
    };

    return (
        <div>
            <div className='center-form my-5'>
                <h1 className='text-center'>Post New User</h1>
                <Form onSubmit={handleSubmit} className='inputGroup'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter Phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Post User
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default PostUser;