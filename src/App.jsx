import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RouterConfig from './router/RouterConfig'
import Drawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from 'react-redux'
import { calculateAmount, falseOpen, removeProduct } from './redux/storageSlice'



function App() {


  const {products, open, totalAmount} = useSelector((store) => store.storage)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(calculateAmount())
  },[])

  

  return (
    <div>
      <Header />
      <RouterConfig />
      <Drawer open={open} onClose={()=> dispatch(falseOpen())} anchor='right' >
        {
          products && products.map((product) => {
            return(
              <div key={product.id} className='drawer-wrap'>
                <div className='drawer'>
                  <img className='d-img' src={product.image}/>
                  <h3 className='d-h3'>{product.title} ({product.count})</h3>
                  <h2 className='d-h2'>{product.price}₺</h2>
                  <button onClick={()=> dispatch(removeProduct(product.id))}>Sil</button>
                </div>
              </div>
            )
          })
        }
        <div><h2>Toplam Tutar: <span style={{color:"brown"}}>{totalAmount}₺</span></h2></div>
      </Drawer>
      <Footer />
    </div>

  )
}

export default App
