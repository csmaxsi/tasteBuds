import React from "react";
//import img1 from './aboutus.jpg'
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const FoodOutlet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/api/outlets")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const updateHandler = (id) => {
    alert(`updating ${id}`);
  }

  const deleteHandler = (id) => {
   fetch(`http://localhost:4200/api/outlets/${id}`,{
    method:'DELETE'
   }).then((result)=>{
    result.json().then((resp)=>{
    console.warn(resp)
   })
  })
    alert(`deleted id ${id}`);
  }
 
  return (
    <>
      <div class="container">
        <div class="row mt-3">
          {
            data.map((item) => {
              return (
                <div class="col-3 mt-2">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" img src = {item.imgUrl} style={{ width: 286, height: 180 }} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle>{item.address}</Card.Subtitle>
                      <Card.Text>
                        {item.location}
                      </Card.Text>
                      <div className="d-flex justify-content-around" >
                        <Button variant="primary" onClick={() => updateHandler(item._id)}>Update</Button>
                        <Button variant="primary" onClick={() => deleteHandler(item._id)}>Delete</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default FoodOutlet;
