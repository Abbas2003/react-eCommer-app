import { Button, Image } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../context/CartContext'

const ProductDetail = () => {

  const {id} = useParams()
  const [product, setProduct] = useState({})
  const {isItemAdded, addItemToCart} = useContext(CartContext)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((res) => setProduct(res));
  }, [])


  return (
    <div className='container h-screen w-screen flex justify-center items-center flex-col'>
      <Image src={product?.thumbnail} preview={false} height={500} width={500} /> 
        <h1 className='text-5xl font-mono font-extrabold'>{product?.title}</h1>
        <p className='text-lg my-2'>{product?.description}</p>
        <p className='text-lg'>Brand <span className='font-bold'>{product?.brand}</span> </p>
        <p className='text-lg'>Category <span className='font-bold'>{product?.category}</span> </p>
        <Button onClick={() => addItemToCart(product)}>
        {isItemAdded(product.id)
          ? `Added (${isItemAdded(product.id).quantity})`
          : "Add to Cart"}
      </Button>
    </div>
  )
}

export default ProductDetail