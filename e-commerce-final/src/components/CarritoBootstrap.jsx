import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { CarritoContext } from "../contexts/CarritoContext";
import { AuthContext, useAuthContext } from "../contexts/AuthContext.jsx";
import CarritoCardBootstrap from "./CarritoCardBootstrap";

function CarritoBootstrap() {
    const {user} = useContext(AuthContext);
    const { productosCarrito, vaciarCarrito, borrarProductoCarrito } = useContext(CarritoContext);

    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad,
        0
    );

    function funcionDisparadora(id) {
        borrarProductoCarrito(id);
    }

    function funcionDisparadora2() {
        vaciarCarrito();
    }

    function finalizarCompra() {
        alert("¡Compra finalizada con éxito!");
        vaciarCarrito(); // limpia el carrito después de comprar
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <Container className="my-4">
            <h3 className="mb-3">Carrito de compras</h3>
        <Button variant="secondary" className="mb-4" onClick={funcionDisparadora2}>
            Vaciar carrito
        </Button>

        {productosCarrito.length > 0 ? (
            productosCarrito.map((producto) => (
            <CarritoCardBootstrap
                key={producto.id}
                producto={producto}
                funcionDisparadora={funcionDisparadora}
            />
            ))
        ) : (
            <p>Carrito vacío</p>
        )}

        {total > 0 && (
            <h5 className="mt-4 text-end">Total a pagar: ${total.toFixed(2)} </h5>
        )}

        {total > 0 && (
        <>
         
          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" onClick={finalizarCompra}>
              Finalizar compra
            </Button>
          </div>
        </>
        )}
        </Container>
    );
}

export default CarritoBootstrap;
