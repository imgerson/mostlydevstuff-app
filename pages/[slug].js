
import React from 'react';
import PropTypes from 'prop-types';
import BlogEntry from '../components/blog-entry/blog-entry';

import { useRouter } from 'next/router'
import { fetchPosts, fetchPost } from '../lib/api';

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <BlogEntry post={ post } />;
};

BlogPost.propTypes = {
  post: PropTypes.object.isRequired
};

export const getStaticPaths = async () => {
  const posts = await fetchPosts();

  const paths = posts.map((post) => {
    return { params: { slug: post.slug, year: '' } };
  });

  return { paths: paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetchPost(params.slug);

  return { props: { post: post[0] } };
};

export default BlogPost;
