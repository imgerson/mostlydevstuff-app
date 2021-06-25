import React from 'react';
import PropTypes from 'prop-types';

import styles from './blog-entry.module.scss';

const getHTMLMarkup = (html) => {
  return { __html: html };
};

const BlogEntry = ({ post }) => {
  return (
    <div className={ styles.entry }>
      <div className={ styles.content }>
        <div>
          <h1>{ post.title.rendered }</h1>
          <div dangerouslySetInnerHTML={ getHTMLMarkup(post.content.rendered) } />
        </div>
      </div>
    </div>
  );
};

BlogEntry.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogEntry;
