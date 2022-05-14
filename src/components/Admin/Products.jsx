import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Products = () => {
  return (
    <>
    <h1>Products</h1>
    <hr />
    <div className="btn">
        <Button variant='success'  className=' '>Add New Products </Button>
      </div>
      <br />
      <hr />
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Slug</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>1</td>
            <td>T-shirt</td>
            <td>men</td>
            <td>
                <Button className='btn-sm' variant="info">View</Button>
                <Button className='btn-sm' variant='warning'>Edit</Button>
                <Button className='btn-sm' variant='danger'>Delete</Button>
            </td>
          </tr>
      </tbody>
    </Table>
  </>
  )
};

export default Products;

