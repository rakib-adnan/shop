import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Tag = ({tags}) => {



      // <!-- ========== Delete Tags Start ========== -->
          const handletagDelete = (id) =>{
            axios.delete('http://localhost:5050/tags/' + id);
          }
     // <!-- ========== End Section ========== -->
       
  

      /**<======Edit Form Tag start=======> */

             // Edit tag usestate 
             const [tag , setTag]= useState({
               name : '',
               id   :''
             });
            //  Tag Form Show 
            const [tagFormShow, setTagFormShow]= useState(false);

            //  Edit useEffece 

            const handletagEdit = (id) =>{
              setTagFormShow(true);

              axios.get('http://localhost:5050/tags/' + id).then(res =>{
                setTag({
                  name : res.data.name,
                  id : res.data.id
                })
              })
            }

              // Edit Form Submit 
              // Make Slug 
              const makeSlug = (data) =>{
                let arr = data.split(' ') ;
                return arr.join('-').toLowerCase();
              }


            const handleEditForm = (e) =>{
              e.preventDefault();
              let slug = makeSlug(tag.name);
              axios.patch('http://localhost:5050/tags/' + tag.id,{
                name : tag.name,
                slug :slug,
                id : tag.id

              }).then(res =>{
                setTagFormShow(false);
              })

            }

      /**<======Edit Form Tag end=======> */

  return (
    <>
      <h1>Tags</h1>
      <hr />
      <br />
      <div className="btn">
      <Link to='/admin/add-tags' className='btn btn-success'>Add New Tag</Link>
      </div>
      <br />
      <br />
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
          {
            tags.map( (data, index) =>
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.slug}</td>
              <td>
                  <Button className='btn-sm' variant="info">View</Button>
                  <Button className='btn-sm' onClick={ () => handletagEdit (data.id)} variant='warning'>Edit</Button>
                  <Button className='btn-sm' onClick={ () => handletagDelete(data.id)} variant='danger'>Delete</Button>
              </td>
           </tr>
            )
          }
           
        </tbody>
      </Table>

     {
       tagFormShow &&
       <>
        <h3>Edit Tag Data</h3>
          <hr />
          <Form onSubmit={handleEditForm} >
                <Form.Group my={3}>
                    <Form.Control type='text'  value={tag.name} placeholder='Tag Name' onChange={e => setTag( {...tag , name : e.target.value}) } />
                </Form.Group>
                <br />
                <Form.Group my={3}>
                  <Button type='submit' variant='success'> UPDATE</Button>
                </Form.Group>
            </Form>
       </>
     }
    </>
  )
};

export default Tag;