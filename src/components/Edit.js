import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React , {useEffect, useState} from 'react';
import Employees from './Employee';
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

function Edit() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [id,setId] = useState('');


    
    let history = useNavigate();

    let index = Employees.map(function(e) {
        return e.Id
    }).indexOf(id);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];

        a.Name=name;
        a.Email = email;
        a.Mobile = mobile;
      
        history("/");

    }

    useEffect(() => {
        setName(localStorage.getItem("Name"))
        setEmail(localStorage.getItem("Email"))
        setMobile(localStorage.getItem("Mobile"))
        setId(localStorage.getItem("Id"))
    },[]);

    return(
        <div>
            <Container>
      <Row>
        <Col sm={12}>
        <Form>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email}onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="Number" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </Form.Group>

     <Form.Group>
     <Button type='submit' onClick={(e) => handleSubmit(e)}>Update</Button>
     </Form.Group>
    
    </Form>
        </Col>
        
      </Row>
     
    </Container>
        </div>
    )
}

export default Edit;
