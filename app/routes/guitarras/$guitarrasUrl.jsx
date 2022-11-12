import React from 'react'
import { useLoaderData } from '@remix-run/react';
import styles from "../../styles/guitarras.css"

export function links(){
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export async function getGuitarra(url){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    return await respuesta.json();
}

export async function loader({params}){
    const { guitarrasUrl } = params
    const guitarra = await getGuitarra(guitarrasUrl);
    return guitarra;
}

const Guitarra = () => {
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
    return (
        <main className='contenedor guitarra'>
            <img className='imagen' src={imagen.data.attributes.url}/>
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
            </div>
        </main>

    
  )
}

export default Guitarra;

