import { Button, Input, Pagination, Row, Select } from 'antd'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { SearchOutlined } from '@ant-design/icons'
import { CartContext } from '../context/CartContext'


const Products = () => {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(20)
  const [total, setTotal] = useState(20)
  const [loading, setLoading] = useState(true)

  const {cartItems, addItemToCart} = useContext(CartContext)
  // console.log("cartItems =>", cartItems);
  

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);


  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=20&skip=${skip}`)
      .then(res => {
        setProducts(res.data.products)
        setTotal(res.data.total)
        setLoading(false)
      })
      .catch(err => alert(err.message))
  }, [skip])


  return (
    <div className='container mx-auto'>
      <div className='flex jusify-between gap-2 my-10'>

        {/* Search bar */}
        <Input type='search' placeholder='Search' />
        <Select
          showSearch
          className='h-12 w-1/2'
          placeholder='Select Category'
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={categories.map((data) => {
            return { label: data.name, value: data.slug };
          })}
        />
        <Button icon={<SearchOutlined />} className="h-12">
          Search
        </Button>
      </div>


      {/* Products */}
      <Row gutter={16} justify={"center"}>
        {loading ? (
          // Show skeleton cards while loading
          Array.from({ length: 30 }).map((_, index) => (
            <ProductCard key={index} loading={true} />
          ))
        ) : (
          // Show product cards when data is loaded
          products.map((data) => (
            // console.log("data =>", data),
            <ProductCard key={data.id} item={data} />
          ))
        )}
      </Row>

      {/* Pagination */}
      <div className='flex justify-center my-8'>
        <Pagination
          defaultCurrent={1}
          total={total}
          pageSize={20}
          onChange={(num) => {
            setSkip((num - 1) * 20)
          }}
        />
      </div>
    </div>
  )
}

export default Products