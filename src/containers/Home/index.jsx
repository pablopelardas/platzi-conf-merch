import React from 'react';
import initialState from '../../initialState';
import Products from '../../components/Products';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Productos</title>
        {/* Twitter para poder añadir un formato cuando comparta en twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pablopelardas" />
        <meta name="twitter:creator" content="@pablopelardas" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        {/* Formato para Facebook con el estandar OG */}
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta
          property="og:url"
          content="https://platzi-conf-merch-24438.web.app/"
        />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="874403600625384" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
