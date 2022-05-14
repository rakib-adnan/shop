import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css'

const Dashboard = () => {
  return (
  
    <section className="dash my-5">
    <Container>
      <Row>
          <Col md={4}>
            <ul className='list-group dash_menu'>
                <li className='list-group-item' ><Link to="/admin/dash"> Dashboard</Link></li>
                <li className='list-group-item' ><Link to="/admin/product" >Product</Link></li>
                <li className='list-group-item' ><Link to="/admin/cate" >Category</Link></li>
                <li className='list-group-item' ><Link to="/admin/tags" >Tags</Link></li>
                <li className='list-group-item' ><Link to="/admin/logout">LogOut</Link></li>
            </ul>
          </Col>
          <Col md={8}> 

                <Outlet/>
                
          </Col >
      </Row>
  </Container>
    </section>


 
  
 
  )
};

export default Dashboard;