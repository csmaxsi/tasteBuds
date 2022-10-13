import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom';


const Addfood = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { item } = useParams();

  console.log(item);

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const addProduct = async () => {
    console.warn(name, type, description, price, image)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('type', type);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('imgUrl', image);
  


    var object = {};
    for (const [key, value] of formData) {
      if (key === 'imgUrl' && value) {
        object[key] = await toBase64(value);
      } else {
        object[key] = value;
      }
    }
    object.outletId = '63415914404ea81b8099ba16';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    options.body = JSON.stringify(object);
    let result = await fetch("http://localhost:4200/api/foods", options);
    alert("Data has been saved")
   
  
  }
  return (
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="name" />
          <Form.Label>Food Type</Form.Label>
          <Form.Control type="text"
            onChange={(e) => setType(e.target.value)}
            placeholder="type" />
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description" />
          <Form.Label>Price</Form.Label>
          <Form.Control type="number"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price" />
          <Form.Label>Add Image</Form.Label>
          <Form.Control type="file"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="image" />

        </Form.Group>
      </Form>
      <p></p>
      <Button className="d-grid gap-3" onClick={addProduct} type="submit">Submit Food</Button>{' '}
    </Container>
  );


}

export default Addfood;