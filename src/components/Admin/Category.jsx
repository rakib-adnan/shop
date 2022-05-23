import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';





const Category = ({cats, makeSlug}) => {

  // ===== category add form state =======>

    const [catAddFrm, setCatAddForm] = useState(false);
    const [catEditForm, setEidtForm] = useState(false);

    // handle add form

    const handleFrmshow = () => {
      setCatAddForm(true);
      setEidtForm(false);
      setCat({
        name : '',
        id   : ''
      })
    }

    // < ===== input data get ======== >
    const [cat, setCat] = useState({
      name : '',
      id   : ''
    });

 



  // Form Data Get 


    // form data post and submit

    const handleCatSubmit = (e) => {
      
      e.preventDefault();
      let slug =makeSlug(cat.name)
      axios.post('http://localhost:5050/category', {
        id : '',
        name: cat.name,
        slug: slug
      })
      setCatAddForm(false);
      setCat({
        name : '',
        id   : ''
      })


    }


    // data Edit Form
 

    const handleEditForm = (id) => {
      setEidtForm(true);
      setCatAddForm(false);


     
      axios.get('http://localhost:5050/category/' +id).then(res =>{
      setCat({
        name : res.data.name,
        id  : res.data.id
       
      })
      })
    }
    // updat cat data

   const handleEditSubmit = (e) => {
     e.preventDefault();

     let slug = makeSlug(cat.name)
     axios.patch('http://localhost:5050/category/' + cat.id,{
       name:cat.name,
       slug: slug
     })
   }
  //  data delete 

  const hendleDelete = (id) =>{
    axios.delete('http://localhost:5050/category/' + id);
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

        cats.map((data , index) =>
              
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.slug}</td>
              <td>
                 
                  <Button className='btn-sm' onClick={ () => handleEditForm(data.id)} variant='warning'>Edit</Button>
                  <Button className='btn-sm' onClick={ () => hendleDelete(data.id)} none variant='danger'>Delete</Button>
              </td>
            </tr>
              )
        }

  

        </tbody>
      </Table>


         
              {
       catAddFrm && 
       <>
        <h2>Add Catagory Form</h2>
       <Form onSubmit={ handleCatSubmit} >
             <Form.Group my={3}>
                 <Form.Control type='text' placeholder='Tag Name' value={cat.name} onChange={ e => setCat({...cat , name:e.target.value}) }   />
             </Form.Group>
         <br />
             <Form.Group my={3}>
               <Button type='submit' variant='primary'> Add</Button>
             </Form.Group>
         </Form>
         <hr />
    </>
     }

{
       catEditForm && 
       <>
        <h2>Edit Form</h2>
       <Form onSubmit={ handleEditSubmit} >
             <Form.Group my={3}>
                 <Form.Control type='text' placeholder='Tag Name' value={cat.name} onChange={ e => setCat({...cat , name:e.target.value}) }   />
             </Form.Group>
         <br />
             <Form.Group my={3}>
               <Button type='submit' variant='primary'> Add</Button>
             </Form.Group>
         </Form>
         <hr />
    </>
     }

    </>
  )
};

export default Category;