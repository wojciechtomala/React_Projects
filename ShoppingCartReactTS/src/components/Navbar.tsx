import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
                Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
                Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
                About
            </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button onClick={openCart} style={{width: "40px", height: "40px",display:"flex", justifyContent:"center", alignItems: "center", position:"relative"}} variant="outline-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:"#FFF", width: "20px", height: "20px", position:"absolute", top:-5, right:-10, fontSize:10}}>{cartQuantity}</div>
                </Button>
            )}
        </Container>
        </NavbarBs>
    )
}