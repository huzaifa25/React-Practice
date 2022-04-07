import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './App.css';

function Header(){
    return(
            <div>
              <Navbar bg="dark" variant="dark">
                 <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                   <Nav className="me-auto nav_bar_wrapper">
        
                    <Nav.Link href="#features">Add Product</Nav.Link>
                    <Nav.Link href="#pricing">Edit Product</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Nav.Link href="#pricing">Register</Nav.Link>
                    {/* <Link>Addd Product</Link> */}
                  </Nav>
      
              </Navbar>
            </div>
  )
}
export default Header