import '../App.css';
import { Button, Form } from 'react-bootstrap';






function Userinfo() {




  return (
    <>      
      <div className='text-center p-3 text-light' style={{background: "#d19c97"}}>Information Form</div><br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="update username" value={localStorage.getItem("username")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email adddress</Form.Label>
          <Form.Control type="text" placeholder="update Email address" disabled value={localStorage.getItem("email")}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full address</Form.Label>
          <Form.Control type="text" placeholder="Update full address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select a Delivery Address</Form.Label>
          <Form.Control type="text" placeholder="Update delivery address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="light" type="submit" style={{background: "#d19c97"}}> User Update</Button>
      </Form>

    </>
  );
}

export default Userinfo;



