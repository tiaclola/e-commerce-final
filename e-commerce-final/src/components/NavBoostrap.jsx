import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { FaHome, FaBoxOpen, FaUsers, FaUserCog, FaPlus, FaShoppingCart, FaSignInAlt} from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

function NavBoostrap() {
  const { productosCarrito } = useContext(CarritoContext);
  const { admin } = useAuthContext();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TiaClola
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-principal" />
        <Navbar.Collapse id="nav-principal">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><FaHome className="me-1" style={{ color:"lightblue" }} />Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos"><FaBoxOpen className="me-1" style={{ color:"lightblue" }} />Productos</Nav.Link>
            <Nav.Link as={Link} to="/nosotros"><FaUsers className="me-1" style={{ color:"lightblue" }} />Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto"><FaComment className="me-1" style={{ color:"lightblue" }} />Contacto</Nav.Link>
            {admin && <Nav.Link as={Link} to="/admin"><FaUserCog className="me-1" style={{ color:"lightblue" }} />Admin</Nav.Link>}
            {admin && <Nav.Link as={Link} to="/admin/agregarProductos"><FaPlus className="me-1" style={{ color:"lightblue" }} />Agregar productos</Nav.Link>}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/carrito">
              <FaShoppingCart style={{ marginRight: "5px", color: "lightblue" }} />
              {productosCarrito.length > 0 && (
                <Badge bg="light" text="dark">{productosCarrito.length}</Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/login"><FaSignInAlt className="me-1" style={{ color:"lightblue" }} />Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBoostrap;
