import React from 'react';
import { useLoaderData } from "@remix-run/react";
import Guitarra from '~/components/guitarra';
import stylesGuitarras from "../styles/guitarras.css";
import ListadoPost from "../components/listadoPost";
import stylesPost from "../styles/blog.css"
import Curso from "../components/curso"
import stylesCurso from "../styles/curso.css"

function meta(){

}
function links(){
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: "stylesheet",
      href: stylesPost
    },
    {
      rel: "stylesheet",
      href: stylesCurso
    }
  ]
}
async function loader(){
  const respuestaGuitarras = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const resultado = await respuestaGuitarras.json();
  const respuestaPost = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const resultadoPost = await respuestaPost.json();
  const respuestaCurso = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  const resultadoCurso = await respuestaCurso.json();
  console.log(resultadoCurso);
  return {
    resultado, resultadoPost, resultadoCurso
  }
}
const Index = () => {
  const datos = useLoaderData();
  const guitarras = datos.resultado.data;
  const posts = datos.resultadoPost.data
  const curso = datos.resultadoCurso;
  return (
    <>
      <main className='contenedor'>
        <h2 className='heading'>Nuestra Colección</h2>
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
      <Curso
        curso={curso.data.attributes}
      />
      <section className='contenedor'>
        <ListadoPost
          posts={posts}
        />
      </section>
    </>
  )
}

export { meta, links, loader } 
export default Index