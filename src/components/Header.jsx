import React, { useState } from 'react'
import '../css/Header.css'
import { FaBasketShopping } from "react-icons/fa6";
import img from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux'
import { changeOpen } from '../redux/storageSlice';
import { FaSearch } from "react-icons/fa";
import { searchProduct } from '../redux/productSlice';




function Header() {

  const navigate = useNavigate()

  const {products} = useSelector((store) => store.storage)
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")

  const getSearch = () => {
    dispatch(searchProduct(search))
    setSearch("")
  }
  
  const changeeOpen = () => {
    dispatch(changeOpen())
  }

  return (
    <div className='header'>
      <div className='header-wrap'>
        <div className='logo'>
          <img style={{ cursor: "pointer" }} onClick={() => navigate("/")} src={img} />
          <h1>E-TİCARET</h1>
        </div>
        <div className='header-search'>
          <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Ürün arayınız' type="text" />
          <FaSearch onClick={getSearch} className='FaSearch'/>
          <Badge badgeContent={products.length} color="primary">
            <FaBasketShopping onClick={changeeOpen} className='FaBasketShopping' />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Header