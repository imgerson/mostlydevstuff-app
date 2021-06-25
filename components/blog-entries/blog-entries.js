import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './blog-entries.module.scss';

const BlogEntries = ({ posts }) => {
  return (
    <div className={ styles.entries }>
      <div className={ styles.content }>
        <h3>Latests blog posts</h3>
        <ul className={ styles.list }>
          { posts && posts.map((entry, key) => {
            const dateObj = new Date(entry.date);

            return (
              <li key={ key } className={ styles.item } >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link href={ `/${dateObj.getFullYear()}/${entry.slug}` }><a>{ entry.title.rendered }</a></Link>
              </li>
            );
          }) }
        </ul>
      </div>
    </div>
  );
};

BlogEntries.propTypes = {
  posts: PropTypes.array.isRequired
};

export default BlogEntries;
