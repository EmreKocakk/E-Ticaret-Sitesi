import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../css/ProductDetails.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux'
import { addBasket, calculateAmount } from '../redux/storageSlice';




function ProductDetails() {

  const { id } = useParams()

  const API_URL = "https://fakestoreapi.com/products/"

  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const getProduct = async () => {
    const response = await axios.get(`${API_URL}${id}`)
    setData(response.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      if (count > 0) {
        setCount(count - 1)
      }
    }
  }

  const getPayload = () => {
    if(count > 0){
      const payload = {
      id,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      count
    }
    dispatch(addBasket(payload))
    dispatch(calculateAmount())
    setCount(0)
      alert("Sepete Ekleme Başarılı...")
    }
    else{
      alert("Sepete Ekleme İçin Ürün Adeti Seçiniz...")
    }
    
  }
  

  return (
    <div className='product-details-wrap'>
      <div className='product-details'>
        <div>
          <img src={data.image} />
        </div>
        <div className='product-details-content'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h3>{data.price}₺</h3>
          <div className='product-details-count'>
            <CiCirclePlus style={{cursor:"pointer"}} onClick={increment}/>{count}<CiCircleMinus style={{cursor:"pointer"}} onClick={decrement} />
          </div>
          <button onClick={getPayload} >Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails