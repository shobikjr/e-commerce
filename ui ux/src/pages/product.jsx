import React ,{useContext} from 'react'
  import{ShopContext} from'../Context/ShopContext'
  import{useParams}from'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrums'
import ProdcutDisplay from '../components/ProductDisplay/ProdcutDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const{all_product}= useContext(ShopContext)
  const {productid} =useParams();

  console.log("asdasdas",productid)
  const product = all_product.find((e)=>e.id === Number(productid));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProdcutDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>

    </div>
  ) 
}

export default Product