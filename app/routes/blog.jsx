import React from 'react'
import { useLoaderData } from '@remix-run/react';
import Post from '~/components/post';
import styles from "../styles/blog.css";

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function getPosts(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  return await respuesta.json();
}

export async function loader(){
  const posts = await getPosts();
  return posts.data
  
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <main className="contenedor">
      <h2 className='heading'>Blog</h2>
      <div className="blog">
        {posts.map( post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog