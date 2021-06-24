import React, { useState, useEffect } from 'react';
import fetch from '@gasket/fetch';
import Link from 'next/link';

import styles from './blog-entries.module.scss';


const BlogEntries = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEntries(result);
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, []);

  return (
    <div className={ styles.entries }>
      <div className={ styles.content }>
        <h3>Latests blog posts</h3>
        { !isLoaded &&
          <p>Loading...</p>
        }
        { error &&
          <p>Oops, there was an error fetching the blog posts.</p>
        }
        { isLoaded &&
          <ul className={ styles.list }>
            { entries && entries.map((entry, key) => {
              const dateObj = new Date(entry.date);

              return (
                <li key={ key } className={ styles.item } >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link href={ `/${dateObj.getFullYear()}/${entry.slug}` }><a>{ entry.title.rendered }</a></Link>
                </li>
              );
            }) }
          </ul>
        }
      </div>
    </div>
  );
};

export default BlogEntries;
