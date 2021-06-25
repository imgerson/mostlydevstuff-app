import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Hero from '../hero/hero';

import styles from './blog-entry.module.scss';

const getHTMLMarkup = (html) => {
  return { __html: html };
};

const BlogEntry = ({ post }) => {
  return (
    <>
      <div className='content-wrapper'>
        <div className='content'>
          <Link href='/'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={ styles.back }>Go back to the homepage</a>
          </Link>
          <div>
            <h1>{ post.title.rendered }</h1>
            <div dangerouslySetInnerHTML={ getHTMLMarkup(post.content.rendered) } />
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
};

BlogEntry.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogEntry;
