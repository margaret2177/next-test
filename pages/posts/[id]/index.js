import React from 'react';
import Link from 'next/link';

const Post = ({ post, comments }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link> {JSON.stringify(post)}
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  const paths = data
    .map((d) => d.id)
    .map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [post, comments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(
      (res) => res.json()
    ),
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    ).then((res) => res.json()),
  ]);
  return {
    props: {
      post,
      comments,
    },
  };
}
