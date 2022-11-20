import React from 'react'
import stylesCarrito from "../styles/carrito.css";

function links(){
  return [
    {
      rel: "stylesheet",
      href: stylesCarrito
    }
  ]
}
function meta(){
  return {
    title: "GuitarLA - Carrito de Compras",
    description: "Venta de guitarras, blog, cursos, etc"
  }
}
const Carrito = () => {
  return (
    <main className='contenedor'>
      <h1 className='heading'>Carrito de Compras</h1>
      <div className='contenido'>
        <div className="carrito">
          <h2>Artículos</h2>
        </div>
        <aside className='resumen'>
          <h3 >Resumen del Pedido</h3>
          <p>Total a pagar</p>
        </aside>
      </div>
    </main>
  )
}

export default Carrito;
export { links, meta }