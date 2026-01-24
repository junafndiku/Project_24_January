import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Container, Table, Button } from "react-bootstrap"

const ReadAllPackages = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const allitems = async () => {
      await axios.get("http://localhost:5000/readAll/")
        .then(res => setItems([res.data]))
        .catch(err => console.log("Items not read " + err))
    };
    allitems()
  }, [])
  return (
    <Container>
      <h1>Read All Items</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Package name</th>
            <th>Description</th>
            <th>Region</th>
            <th>Destination</th>
            <th>Number of days</th>
            <th>Transport</th>
            <th>Price</th>
            <th>Find out more</th>
          </tr>
        </thead>
        <tbody>
         
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.packageName}</td>
                <td>{item.packageDescription}</td>
                <td>{item.packageRegion}</td>
                <td>{item.packageDestination}</td>
                <td>{item.packageDays}</td>
                <td>{item.packageTransportation}</td>
                <td>{item.packagePrice}</td>
                <td><Button variant="primary" href={`/readOne/${item._id}`}>Read</Button></td>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </Container>
  )
}

export default ReadAllPackages;