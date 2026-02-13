import "./Home.css";
import Product from "../Components/Product";
import axios from "axios";

const Home = () =>{
      


    return(
        <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/8ff4f5bd039ca901.png?q=80" alt="banner" className="home-banner"/>
       <br /><br />

       <h2>Top Deals </h2>
        <div className="product-row">
            <Product img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7ndCOqED5i6UurDMZpbfBfS1505WMmljsg&s" title="Projectors" price="5990"/>
            <Product img="https://www.tpstech.in/cdn/shop/files/Dell_S2725QC_27_UHD_4K_120Hz.webp?v=1766993788&width=533" title="Monitor" price="7999"/>
            <Product img="https://rukminim2.flixcart.com/image/480/640/xif0q/dslr-camera/v/7/a/-original-imagt3hdjbhvuyb3.jpeg?q=90" title="Camera" price="3210"/>
            <Product img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1FGNVZ7AMAcSLG02l8P13DstPd8FYem72Q&s" title="Airpods" price="399"/>
            <Product img="https://m.media-amazon.com/images/I/31cSeRqDTwL._AC_SR290,290_.jpg" title="Printers" price="17999"/>
            <Product img="https://cdn.shopify.com/s/files/1/0316/2705/1053/files/T1374101104100_1_540x.jpg?v=1727188676" title="Watches" price="299"/>
            <Product img="https://m.media-amazon.com/images/I/61Uu7F36bGL._AC_UF1000,1000_QL80_.jpg" title="Torches" price="999"/>
            
        </div>
        <br /><br /><br />

        <h2> Fashion Deals </h2>
        <div className="product-row">
        <Product img="https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/h/9/p/xl-plain-black-deer-original-imah3xssfndk3bwf.jpeg?q=90" title="Casual Shirt" price="799" />
        <Product img="https://frenchcrown.in/cdn/shop/files/J-306_8.jpg?v=1700915151&width=1750" title="Denim Jeans" price="1299" />
        <Product img="https://m.media-amazon.com/images/I/614aiM56siL._AC_UY1000_.jpg" title="Sneakers" price="1999" />
        <Product img="https://assets.ajio.com/medias/sys_master/root/20231225/MKbb/6588d899ddf7791519e4e885/-473Wx593H-466904610-grey-MODEL.jpg" title="jackets" price="1199"/>
        <Product img="https://images-cdn.ubuy.co.in/6419c681fc23f64be15cd469-fur-coat-women-winter-fashion-jackets.jpg" title="Denim" price="599"/>
        </div>

        

        </div>
    );
};

export default Home;