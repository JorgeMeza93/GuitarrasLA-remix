import React from 'react';
import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import styles from "../../styles/guitarras.css"

export function meta({data}){
    if(!data){
        return{
            title: "GuitarLA - Guitarra no encontrada",
            description: "Guitarra no encontrada. Verificar nombre"
        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
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

export async function getGuitarra(url){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    return await respuesta.json();
}

export async function loader({params}){
    const { guitarrasUrl } = params
    const guitarra = await getGuitarra(guitarrasUrl);
    if(guitarra.data.length === 0){
        throw new Response("", {
            status: 404,
            statusText: "Resultado no encontrado"
        })
    }
    return guitarra;
}

const Guitarra = () => {
    const [cantidad, setCantidad] = useState(0);
    
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
    const hadleSubmit = e => {
        e.preventDefault();
        if(cantidad < 1){
            alert("Debe ser mayor a uno")
        }
        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        console.log(guitarraSeleccionada);
    }
    return (
        <main className='contenedor guitarra'>
            <img className='imagen' src={imagen.data.attributes.url}/>
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
                <form className='formulario'
                    onSubmit={hadleSubmit}
                >
                    <label htmlFor='select'>Cantidad</label>
                    <select id='select' 
                        onChange={ e => setCantidad(parseInt(e.target.value))}>
                        <option value="0">--Seleccione--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                  <input
                    type="submit"
                    value="Agregar al carrito"
                  />
                </form>
            </div>
        </main>

    
  )
}

export default Guitarra;

