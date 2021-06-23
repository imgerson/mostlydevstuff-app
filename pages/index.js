/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Hero from '../components/hero/hero';

const pageStyle = { textAlign: 'center' };

export const IndexPage = () => (
  <div style={ pageStyle }>
    <Head title='Home'/>

    <Hero />
  </div>
);

export default IndexPage;
