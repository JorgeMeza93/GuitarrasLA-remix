import React from 'react'
import { useLoaderData } from '@remix-run/react';
import Guitarra from '~/components/guitarra';
import styles from "../styles/guitarras.css";

export function meta(){
  return {
    title: "GuitarLA - Nuestra colección de guitarras",
    description: "GuitarLA - Nuestra colección de guitarras"
  }
}
export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const resultado = await respuesta.json();
  return resultado.data;
}

const Tienda = () => {
  const guitarras =  useLoaderData();
  return (
    <main className='contnedor'>
      <h2 className="heading">Nuestra Colección</h2>
      {guitarras.length && (
        <div className='guitarras-grid'>
          {guitarras.map( guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda