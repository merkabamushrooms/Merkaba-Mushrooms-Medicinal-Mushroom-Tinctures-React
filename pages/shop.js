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
          <section className="shop-container2">
            <div>
              <DangerousHTML
                html={`<div id="my-categories-78742521"></div>
<div>
    <script data-cfasync="false" type="text/javascript"
        src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-11-21" charset="utf-8"></script>
    <script type="text/javascript">
        xCategoriesV2("id=my-categories-78742521"); 
    </script>
</div>`}
              ></DangerousHTML>
            </div>
          </section>
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
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .shop-container2 {
            flex: 0 0 auto;
            width: 1200px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Shop
