import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';





const Category = () => {

  // ===== category add form state =======>

    const [catAddFrm, setCatAddForm] = useState(false);

    // handle add form

    const handleFrmshow = () => {
      setCatAddForm(true);
    }



  return (
    <>
      <h1>Catagory</h1>
      <hr />
      <div className="btn">
        <Button onClick={ handleFrmshow }  variant='success'  className=' '>Add New Catagory </Button>
      </div>
      <br />
      <br />
     
     {
       catAddFrm && 
       <>
        
       <Form  >
             <Form.Group my={3}>
                 <Form.Control type='text' placeholder='Tag Name'  />
             </Form.Group>
         <br />
             <Form.Group my={3}>
               <Button type='submit' variant='primary'> Add</Button>
             </Form.Group>
         </Form>
         <hr />
    </>
     }
  
      <br />
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

export default Category;