/* eslint-disable no-unused-vars */
import React from 'react';

import Head from '../components/head';
import Hero from '../components/hero/hero';
import BlogEntries from '../components/blog-entries/blog-entries';

export const IndexPage = () => (
  <div>
    <Head title='Home'/>
    <Hero />
    <BlogEntries />
  </div>
);

export default IndexPage;
