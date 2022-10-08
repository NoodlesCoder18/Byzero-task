import React from 'react'
import Table from 'react-bootstrap/Table';
import Employees from './Employee';
import { NavLink , useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const Home = () => {

    let history = useNavigate();

    const handleEdit = (id,name,email,mobile) => {
      localStorage.setItem('Name',name);
      localStorage.setItem('Email',email);
      localStorage.setItem('Mobile',mobile);
      localStorage.setItem("Id",id);
    }
    return(
        <>
            <div>
                <h2 style={{textAlign:"center",padding:"20px"}}>Edit Data</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
{Employees && Employees.length > 0 
          ?
          Employees.map((item) => {
            return(
                <tr>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{item.Mobile}</td>
          <td>
            <NavLink to={'/edit'}>
                <Button onClick={() => handleEdit(item.Id,item.Name,item.Email,item.Mobile)} disabled={!item.Name && !item.Email && !item.Mobile}>Edit</Button>
            </NavLink>
          </td>
        </tr>
            )
          })
          :
          "No data Availabel"
        }
        
      </tbody>
    </Table>
    <br></br>
<br></br>

<NavLink to="/">
  <Button>Create</Button>
</NavLink>
</div>

</>
    )
}
export default Home