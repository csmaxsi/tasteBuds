import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Foods = () => {

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
    fetch(`http://localhost:4200/api/foods/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
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
                  <Card style={{ height: '100%' }}>
                    <Card.Img variant="top" img src={item.imgUrl } style={{ width: 286, height: 180 }} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle>${item.price}</Card.Subtitle>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <div className="d-flex justify-content-around" >
                        
                        <Link to="Updatefood" params={{ item: item }}><Button variant="primary">Update</Button></Link>
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

export default Foods;
