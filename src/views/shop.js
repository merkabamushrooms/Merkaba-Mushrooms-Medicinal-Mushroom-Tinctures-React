import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './shop.css'

const Shop = (props) => {
  return (
    <div className="shop-container">
      <Helmet>
        <title>Shop Mushroom Tinctures - Merkaba Mushrooms</title>
        <meta
          property="og:title"
          content="Shop Mushroom Tinctures - Merkaba Mushrooms"
        />
      </Helmet>
      <Header></Header>
      <div className="shop-container1">
        <div className="shop-container2">
          <div>
            <DangerousHTML
              html={`<div id="my-store-78742521"></div>
<div>
    <script data-cfasync="false" type="text/javascript"
        src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-11-16" charset="utf-8"></script>
    <script type="text/javascript">
        window.ec=window.ec||{}; 
window.ec.storefront=window.ec.storefront||{}; 
window.ec.storefront.enable_navigation=true;
window.ec.storefront.product_details_layout="TWO_COLUMNS_SIDEBAR_ON_THE_RIGHT";
window.ec.storefront.product_details_gallery_layout="SINGLE_IMAGE";
window.ec.storefront.product_details_two_columns_with_right_sidebar_show_product_description_on_sidebar=true;
window.ec.storefront.product_details_two_columns_with_left_sidebar_show_product_description_on_sidebar=false;
window.ec.storefront.product_details_show_product_name=true;
window.ec.storefront.product_details_show_breadcrumbs=true;
window.ec.storefront.product_details_show_product_sku=false;
window.ec.storefront.product_details_show_product_price=true;
window.ec.storefront.product_details_show_in_stock_label=true;
window.ec.storefront.product_details_show_number_of_items_in_stock=true;
window.ec.storefront.product_details_show_qty=false;
window.ec.storefront.product_details_show_wholesale_prices=true;
window.ec.storefront.product_details_show_product_options=true;
window.ec.storefront.product_details_show_product_description=true;
window.ec.storefront.product_details_show_delivery_time=undefined;
window.ec.storefront.product_details_show_share_buttons=true;
window.ec.storefront.product_details_position_product_name=100;
window.ec.storefront.product_details_position_breadcrumbs=200;
window.ec.storefront.product_details_position_product_sku=300;
window.ec.storefront.product_details_position_product_price=400;
window.ec.storefront.product_details_position_product_options=undefined;
window.ec.storefront.product_details_position_buy_button=600;
window.ec.storefront.product_details_position_wholesale_prices=700;
window.ec.storefront.product_details_position_product_description=800;
window.ec.storefront.product_details_position_delivery_time=undefined;
window.ec.storefront.product_details_position_share_buttons=900;
window.ec.storefront.product_details_position_subtitle=500;
window.ec.storefront.product_details_show_subtitle=true;
xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","defaultProductId=496594131","id=my-store-78742521");
    </script>
</div>`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Shop
