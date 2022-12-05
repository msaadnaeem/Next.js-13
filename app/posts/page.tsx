import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Post } from "./postInterface";
import Postcard from "./components/postcard";
const postPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
if (!posts) {
  notFound();
}

  return (
    <>
      {posts.map((post: Post) => {
        const { id, title, body } = post;
        return (
          <div key={id}>
            <Link href={`posts/${id}`}>
              <Postcard {...post}/>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default postPage;
