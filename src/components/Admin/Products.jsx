import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = ({product}) => {
  return (
    <>
    <h1>Products</h1>
    <hr />
    <div className="btn">
        <Link to={'/admin/productAdd'}  className=' btn btn-sm btn-primary '>Add New Products </Link>
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
       {
         product.map(( (data,index) => 
          <tr>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.slug}</td>
          <td>
              <Button className='btn-sm' variant="info">View</Button>
              <Button className='btn-sm' variant='warning'>Edit</Button>
              <Button className='btn-sm' variant='danger'>Delete</Button>
          </td>
        </tr>))
       }
      </tbody>
    </Table>
  </>
  )
};

export default Products;

