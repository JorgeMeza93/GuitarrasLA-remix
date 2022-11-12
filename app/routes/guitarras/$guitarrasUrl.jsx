import React from 'react'
import { useLoaderData } from '@remix-run/react';

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

        </main>

    
  )
}

export default Guitarra;

