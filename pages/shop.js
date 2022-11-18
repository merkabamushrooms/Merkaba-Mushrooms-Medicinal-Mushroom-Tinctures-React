import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
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
        <div className="shop-main">
          <div className="shop-container1">
            <h1 className="shop-text">Shop</h1>
            <h1 className="shop-text1 HeadingOne">Merkaba Mushroom&apos;s</h1>
            <p className="shop-text2 Lead">
              <span className="shop-text3">
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className="shop-container2">
              <input
                type="text"
                placeholder="Email here"
                className="shop-textinput Small input"
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
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
          .shop-main {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-end;
          }
          .shop-container1 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            z-index: 2;
            align-self: flex-end;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .shop-text {
            color: var(--dl-color-secondary-700);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .shop-text1 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .shop-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .shop-text3 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .shop-container2 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .shop-textinput {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .shop-textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          @media (max-width: 991px) {
            .shop-main {
              justify-content: flex-start;
            }
            .shop-container1 {
              width: 70%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-tripleunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .shop-container1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .shop-container2 {
              flex-direction: column;
            }
            .shop-textinput {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Shop
