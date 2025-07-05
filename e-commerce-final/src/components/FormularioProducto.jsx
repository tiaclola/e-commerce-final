import React, { useState } from 'react';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../contexts/ProductosContext';

function FormularioProducto({}) {
  const {agregarProducto} = useProductosContext();
  const {admin} = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
    imagen: ""
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return("El precio debe ser mayor a 0.")
    }
    console.log(producto.description.trim())
    if (!producto.description.trim() || producto.description.length < 10) {
      return("La descripción debe tener al menos 10 caracteres.")
    }
    if(!producto.imagen.trim()){
      return("La url de la imgaen no debe estar vacía")
    }
    else{
      return true
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if (validarForm == true) {
      agregarProducto(producto).then((data) => {
        setProducto({ name: '', price: '', description: '', imagen: ""});
      }).catch((error) => {
        dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
      })
    } else{
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar")
    }
  }

  if(!admin){
    return(
      <Navigate to="/login" replace/>
    )
  }

  return (
    <div className='d-flex flex-column  justify-content-center  align-items-center '
        style={{ minHeight: '60vh', marginTop: "20px" , color: 'black' }}>
            
        <form onSubmit={handleSubmit2}className="p-4 border rounded shadow w-50" style= {{backgroundColor: "lightblue"}}>
          <h3>Agregar Producto</h3>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
            type="text" name="name" value={producto.name} onChange={handleChange} className='form-control' required/>
          </div>
          <div className="mb-3">
            <label className="form-label">URL de la imagen</label>
            <input
            type="text" name="imagen" value={producto.imagen} onChange={handleChange} className='form-control' required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
            type="number" name="price" value={producto.price} onChange={handleChange} className="form-control" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <input
            type="text" name="description" value={producto.description} onChange={handleChange} className='form-control' required/>
          </div>
          <button type="submit" className="btn btn-secondary">Agregar Producto</button> 
        </form> 
      </div>   
    
    
  );
}

export default FormularioProducto;
  