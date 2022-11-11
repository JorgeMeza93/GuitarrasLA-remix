import React from 'react';
import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta(){
  return (
    {
      title: "GuitarLA - Nosotros",
      description: "Venta de guitarras, blog de música"
    }
  )
}
export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

const Nosotros = () => {
  return (
   <main className='contenedor nosotros'>
    <h2 className='heading'>Nosotros</h2>
    <div className='contenido'>
      <img src={imagen} alt="Imagen Guitarra" />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada eu arcu quis placerat. Suspendisse non elit semper, lobortis elit at, semper justo. Mauris tempor elit vel ligula pretium vehicula. 
          Ut sollicitudin augue eget dignissim condimentum. Morbi mauris eros, dictum ut vulputate at, fermentum vitae nulla. Donec luctus dui mollis erat egestas, eget tristique ex pharetra. Pellentesque vitae rhoncus
          ex, non bibendum lorem. Phasellus non dapibus arcu, vel viverra ipsum. Phasellus mollis imperdiet ante vel luctus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada eu arcu quis placerat. Suspendisse non elit semper, lobortis elit at, semper justo. Mauris tempor elit vel ligula pretium vehicula. 
          Ut sollicitudin augue eget dignissim condimentum. Morbi mauris eros, dictum ut vulputate at, fermentum vitae nulla. Donec luctus dui mollis erat egestas, eget tristique ex pharetra. Pellentesque vitae rhoncus
          ex, non bibendum lorem. Phasellus non dapibus arcu, vel viverra ipsum. Phasellus mollis imperdiet ante vel luctus.
          Maecenas malesuada eu arcu quis placerat. Suspendisse non elit semper, lobortis elit at, semper justo. Mauris tempor elit vel ligula pretium
        </p>
      </div>
    </div>
   </main>
  )
}

export default Nosotros