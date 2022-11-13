import React from 'react'
import { useLoaderData } from '@remix-run/react';
import { formatearFecha } from '~/helpers/helpers';
import styles from "../../styles/blog.css"

export function meta({data}){
    if(!data){
        return {
            title: "GuitarLA - Entrada no encontrada",
            description: "Entrada no encontrada"
        }
    }
    return {
        title: `GuitarLA - ${data?.data[0]?.attributes.titulo}`,
        description: `GuitarLA, Blog de Música y venta de artículos musicales ${data.data[0].attributes.titulo}`
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

export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    return await respuesta.json();
}
export async function loader({params}){
   const { postsUrl } = params;
   const post = await getPost( postsUrl );
   if(post.data.length === 0){
    throw new Response("", {
        status: 404,
        statusText: "Resultado no encontrado"
    })
   }
   return post
}

const Post = () => {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
  return (
    <article className='contenedor post mt-3'>
        <img src={imagen?.data.attributes?.formats.medium.url} alt={`imagen de ${titulo}`} className="imagen" />
        <div className='contenido'>
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
        </div>
    </article>
  )
}

export default Post