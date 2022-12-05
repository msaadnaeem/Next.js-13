import React from "react";
import { notFound } from "next/navigation";
import Postcard from "../components/postcard";
type pageProps = {
  params: { id: number };
};
async function getPostById(id: number) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return post.json();
}
export default async function page({ params }: pageProps) {
  const post = await getPostById(params.id);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <Postcard {...post} />
    </>
  );
}
