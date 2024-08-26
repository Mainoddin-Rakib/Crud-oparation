import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {

    const { id } = useParams();
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/user/${id}`);
                const data = await response.json();
                setFormData(data)
            } catch (error) {
                console.error("error while fetching users:", error.message);

            }
        }
        fetchUser();
    }, [id]);

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
            const response = await fetch(`http://localhost:5000/api/user/${id}`, {
                method: "PATCH",
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
            <div className='center-form'>
                <h1>Update User</h1>
                <Form onSubmit={handleSubmit}>
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
                    <Button variant="primary" type="submit">
                        Upadate user
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateUser;