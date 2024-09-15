import { Button, Row, Col, Skeleton } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=12')
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(err => {
        alert(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center my-10">
        <h1 className="text-4xl font-bold">Get Your Best Products Here</h1>
        <Link to={'/products'}>
          <Button>See more</Button>
        </Link>
      </div>

      <Row gutter={16} justify={'center'}>
        {loading
          ? // Show skeleton cards while loading
            Array.from({ length: 12 }).map((_, index) => (
              <ProductCard key={index} loading={true} />
            ))
          : // Show product cards when data is loaded
            products.map(item => (
              <ProductCard key={item.id} item={item} loading={false} />
            ))} 
      </Row>
    </section>
  );
};

export default Home;
