import {useEffect} from 'react'
import Product from './Product'
import '../css/ProductList.css'
import { useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../redux/productSlice'



function ProductList() {

  


  const { products } = useSelector((store) => store.product)
  
  const dispatch = useDispatch()
  useEffect(()=> {
        dispatch(getAllProducts())
    },[])

  return (
    <div className='product-list-wrap'>
      <div className='product-list'>
        {
          products && products.map((product) => (
            <Product key={product.id} product = {product} />
          ))
        }

      </div>
    </div>
  )
}

export default ProductList