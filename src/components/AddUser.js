import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React , { useState} from 'react';
import Employees from './Employee';
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

function AddUser() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');

    const [nameError,setNameError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [mobileError,setMobileError] = useState('');


    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name, b = email, c=mobile;

        if( a =="") {
            setNameError(alert("First name required"))
            }
         else{
         setNameError("")
       }
       let regexemail=/^[A-Za-z]+@[a-z]+\.[a-z]+$/;
let resemail=regexemail.test(b)
if(b==""){
    setEmailError(alert("Email is required"))
}
else if(!resemail){
    setEmailError(alert("Email should matches sample@gmail.com"))
}
else{
    setEmailError("")
      }
      let regexphone=/^\d{10}$/;
      let resphone=regexphone.test(c)
      if(c==""){
          setMobileError(alert("Mobile number required"))
      }
      else if(!resphone){
        setMobileError(alert("Phone number should be 10 number"))
      }
      else{
        setMobileError("")
      }
       Employees.push({Id:uniqueId, Name:a,Email:b,Mobile:c});
      setName("")
      setEmail("")
      setMobile("")
        
      }

const handleEdit = (e) =>{
e.preventDefault();
history("/create")                
}
  return (
    <Container>
      <h2 style={{textAlign:"center"}}>Create User</h2>
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

      <Button variant="primary" onClick={(e) => handleSubmit(e)} type="submit" style={{marginRight:"20px"}} >Save
      </Button>
      <Button variant="success" onClick={(e) => handleEdit(e)} type="submit">Edit
      </Button>
    
    </Form>
        </Col>
        
      </Row>
     
    </Container>
  );
}

export default AddUser;