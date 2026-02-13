import Product from "../Components/Product";
const Kids = () => {
  return(
    <div>
      <br /><br /><br />
      <h2>Fashion</h2>
      <div className="product-row">

        <Product img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3UCLdY4mBBbQuhj_rKByzDgA_4-QU-oo6g&s" title="Youth Clothes" price="1299"/>
        <Product img="https://images.meesho.com/images/products/415566424/0ve7y_512.webp?width=512" title="Kurta Pajama" price="299"/>
        <Product img="https://images.meesho.com/images/products/397650694/jff3e_512.webp?width=512" title="Party Wear" price="499"/>
        <Product img="https://image.made-in-china.com/202f0j00OcRkpYUKJtbW/New-Children-s-Princess-Style-Clothing-Girl-s-Bow-Embroidery-Beaded-Wear-Stage-Performance-Dress.webp" title="New Style" price="599"/>
        <Product img="https://seasonschennai.com/cdn/shop/articles/cfe064dada1df3c62194fba860f86b2d.jpg?v=1620131448" title="Chennai Season" price="399"/>

      </div>
      <br /><br /><br />
      <h2> Toys </h2>
      <div className="product-row">
        <Product img="https://rukminim2.flixcart.com/image/356/352/xif0q/remote-control-toy/f/h/u/remote-control-toy-car-electric-chargeable-3d-lightning-black-1-original-imagz45fsehbh2fh.jpeg?q=90&crop=false" title="Electric Car" price="297"/>
        <Product img="https://images-cdn.ubuy.com.sa/6613c5205ab8f34f453046f1-remote-control-car-toddler-toys-1-43.jpg" title="Electric Rock" price="399"/>
        <Product img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyunb1MKz5K3vS_GSqrcQFkihXt6sC2Xk-pA&s" title="Toyloft" price="290"/>
        <Product img="https://toyloft.in/cdn/shop/files/WhatsAppImage2024-07-02at12.27.10PM.jpg?v=1719905825" title="Robot" price="200"/>
      </div>
    </div>
    
  );
};
export default Kids;
