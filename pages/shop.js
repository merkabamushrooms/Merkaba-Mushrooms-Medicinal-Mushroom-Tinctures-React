import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import EcwidShop from '../components/ecwid-shop'
import FooterGray from '../components/footer-gray'

const Shop = (props) => {
  return (
    <>
      <div className="shop-container">
        <Head>
          <title>Shop Mushroom Tinctures - Merkaba Mushrooms</title>
          <meta
            property="og:title"
            content="Shop Mushroom Tinctures - Merkaba Mushrooms"
          />
        </Head>
        <Header></Header>
        <div className="shop-container1">
          <EcwidShop rootClassName="ecwid-shop-root-class-name"></EcwidShop>
        </div>
        <FooterGray></FooterGray>
      </div>
      <style jsx>
        {`
          .shop-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .shop-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Shop
