import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/api/foods")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const updateHandler = (id) => {
    alert(`updating ${id}`);
  }

  const deleteHandler = (id) => {
    alert(`delete ${id}`);
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
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle>${item.price}</Card.Subtitle>
                      <Card.Text>
                        {item.description}
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

export default Home;
