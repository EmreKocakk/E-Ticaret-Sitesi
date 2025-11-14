import { useEffect, useState } from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'



function Product({ product }) {

  const { description, image, price, title, id } = product

  const navigate = useNavigate()


  


  return (
    <div className='product-wrap'>
      <div className='product-card'>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <h3>{price}₺</h3>
        <button onClick={()=> navigate("/product-details/" + id)}>Detayına Git</button>
      </div>
    </div>
  )
}

export default Product