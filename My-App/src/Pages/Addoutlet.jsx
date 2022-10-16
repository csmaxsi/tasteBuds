import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component, useState } from 'react';



const Addoutlet = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
   });

   const addout = async () => {
    console.warn(name, address, rate, description, location, image)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('rate', rate);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('imgUrl', image);

    var object = {};
    for (const [key, value] of formData) {
      if (key === 'imgUrl' && value) {
        object[key] = await toBase64(value);
      } else {
        object[key] = value;
      }
    }
    
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    options.body = JSON.stringify(object);
    let result = await fetch("http://localhost:4200/api/outlets", options);
    alert("Data has been saved")

   }
    return (
      <Container>
      <Form>
        <Form.Group controlId="form.Name">
          <Form.Label>Outlet Name</Form.Label>
          <Form.Control type="text" 
          onChange={(e) => setName(e.target.value)}
          placeholder="name" />
          <Form.Label>Outlet Address</Form.Label>
          <Form.Control type="text" 
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address" />
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number" 
          onChange={(e) => setRate(e.target.value)}
          placeholder="rate" />
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} 
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description" />
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" 
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location" />
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="file"
          onChange={(e) => setImage(e.target.files[0])} 
          placeholder="image" />

        </Form.Group>
      </Form>
      <p></p>
      <Button onClick={addout} type="submit">Submit Outlet</Button>{' '}
     
    </Container>
    );
  
     
       
}

export default Addoutlet;