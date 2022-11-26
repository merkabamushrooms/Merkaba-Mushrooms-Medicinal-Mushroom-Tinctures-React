import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const EcwidShop = (props) => {
  return (
    <>
      <div className={`ecwid-shop-container ${props.rootClassName} `}>
        <div className="ecwid-shop-div">
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
      <style jsx>
        {`
          .ecwid-shop-container {
            width: 100%;
            height: 400px;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .ecwid-shop-div {
            max-width: auto;
          }
          @media (max-width: 991px) {
            .ecwid-shop-div {
              max-width: 991px;
            }
          }
          @media (max-width: 767px) {
            .ecwid-shop-div {
              max-width: 776px;
            }
          }
          @media (max-width: 479px) {
            .ecwid-shop-container {
              height: 100%;
              max-width: 478px;
            }
          }
        `}
      </style>
    </>
  )
}

EcwidShop.defaultProps = {
  rootClassName: '',
}

EcwidShop.propTypes = {
  rootClassName: PropTypes.string,
}

export default EcwidShop
