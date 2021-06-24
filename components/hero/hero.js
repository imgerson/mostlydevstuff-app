import React from 'react';

import styles from './hero.module.scss';

const ICONS = {
  WIDTH: 25,
  HEIGHT: 25
};

const Hero = () => {
  return (
    <div className={ styles.hero }>
      <div className={ styles.info }>
        <h1>Hi, I&apos;m Gerson Ruiz!</h1>
        <h2>
          Software development engineer <span role='img' aria-label='man-technologist'>👨🏾‍💻</span>
          <br />
          &amp; amateur chess player <span role='img' aria-label='crown'>👑</span>
        </h2>
        <p><span className={ styles.cta }>Follow me on all the things:</span>
          <a href='https://twitter.com/imgersonr'>
            <img
              src='twitter.svg'
              alt='Twitter icon'
              width={ ICONS.WIDTH }
              height={ ICONS.HEIGHT }
              className={ styles.icon }
            />
          </a>
          <a href='https://www.linkedin.com/in/gersonruiz/'>
            <img
              src='linkedin.svg'
              alt='Linkedin icon'
              width={ ICONS.WIDTH }
              height={ ICONS.HEIGHT }
              className={ styles.icon }
            />
          </a>
          <a href='https://www.instagram.com/imgersonr/'>
            <img
              src='instagram.svg'
              alt='Instagram icon'
              width={ ICONS.WIDTH }
              height={ ICONS.HEIGHT }
              className={ styles.icon }
            />
          </a>
        </p>
      </div>
      <div className={ styles.image }>
        <picture>
          <source type='image/webp' srcSet='/gerson-ruiz-barcelona.webp' />
          <source type='image/jpeg' srcSet='/gerson-ruiz-barcelona.jpeg' />
          <img src='/gerson-ruiz-barcelona.jpeg' alt='Gerson Ruiz in a bike' width='665' height='500' />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
