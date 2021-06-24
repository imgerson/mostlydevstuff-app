import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from '@gasket/fetch';

import styles from './blog-entry.module.scss';

const getHTMLMarkup = (html) => {
  return { __html: html };
};

const BlogEntry = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [content, setContent] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`/api/post/${router.query.slug[1]}`)
      .then(res => res.json())
      .then(
        (result) => {
          setContent(result[0]);
          setIsLoaded(true);
        },
        (err) => {
          setError(err);
          setIsLoaded(true);
        }
      );
  }, [router.isReady, router.query.slug]);

  return (
    <div className={ styles.entry }>
      <div className={ styles.content }>
        { !isLoaded &&
          <p>Loading...</p>
        }
        { error &&
          <p>Oops, there was an error fetching the blog post.</p>
        }
        { isLoaded &&
          <div>
            <h1>{ content.title.rendered }</h1>
            <div dangerouslySetInnerHTML={ getHTMLMarkup(content.content.rendered) } />
          </div>
        }
      </div>
    </div>
  );
};

export default BlogEntry;
