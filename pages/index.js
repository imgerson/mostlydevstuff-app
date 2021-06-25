/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { fetchPosts } from '../lib/api';

import Head from '../components/head';
import Hero from '../components/hero/hero';
import BlogEntries from '../components/blog-entries/blog-entries';

import '@fontsource/libre-franklin';
import '@fontsource/roboto';

export const IndexPage = ({ posts }) => (
  <div>
    <Head title='Home'/>
    <Hero />
    <BlogEntries posts={ posts } />
  </div>
);

IndexPage.propTypes = {
  posts: PropTypes.array.isRequired
};

export const getStaticProps = async() => {
  const posts = await fetchPosts();

  return {
    props: { posts: posts }
  };
};

export default IndexPage;
