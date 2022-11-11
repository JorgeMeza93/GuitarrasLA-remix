import React from 'react'

export async function loader(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const resultado = await respuesta.json();
  return{}
}

const Tienda = () => {
  return (
    <div>tienda</div>
  )
}

export default Tienda