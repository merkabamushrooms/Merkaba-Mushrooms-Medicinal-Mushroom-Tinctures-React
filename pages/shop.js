import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header from '../components/header'
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
          <div className="shop-div">
            <DangerousHTML
              html={`<div id="my-store-78742521"></div>
<div>
    <script data-cfasync="false" type="text/javascript"
        src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-11-18" charset="utf-8"></script>
    <script type="text/javascript">
        xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-78742521");
    </script>
</div>`}
            ></DangerousHTML>
          </div>
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
          .shop-div {
            max-width: auto;
          }
          @media (max-width: 991px) {
            .shop-div {
              max-width: 991px;
            }
          }
          @media (max-width: 767px) {
            .shop-div {
              max-width: 776px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Shop
