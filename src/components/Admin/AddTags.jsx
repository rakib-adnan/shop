import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddTags = () => {
  const [tag, setTag] = useState();

  //Slug genaretor 
  const makeSlug = (data) =>{
    let arr = data.split(' ') ;
    return arr.join('-').toLowerCase();

  }

  //Tag form submit start
    const handletagAdd = (e) =>{
      e.preventDefault();
      let slug = makeSlug(tag);
      axios.post('http://localhost:5050/tags',{
       id  : '',
       name: tag,
       slug : slug
      })
    }
  //Tag form submit end


  return (

    <>
        <h1>Add New Tags</h1>
        <hr />
        <Link to='/admin/tags' className='btn btn-warning'> All Tags</Link>
        <br />
        <br />
        <Form onSubmit={handletagAdd}>
            <Form.Group my={3}>
                <Form.Control type='text' placeholder='Tag Name' onChange={e => setTag(e.target.value) } />
            </Form.Group>
            <br />
            <Form.Group my={3}>
               <Button type='submit' variant='success'> Add</Button>
            </Form.Group>
        </Form>

    </>
  )
};

export default AddTags;