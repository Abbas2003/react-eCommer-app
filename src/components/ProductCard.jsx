import React, { useContext } from 'react';
import { Button, Col, Image, Skeleton } from 'antd';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

const ProductCard = ({ item, loading }) => {

  const { thumbnail, title, price, id } = item || {};


  const { isItemAdded } = useContext(CartContext)
  const isAdded = isItemAdded(id) ? true : false;

  return (
    <Col sm={24} md={12} lg={8} xl={6}>
      <div className="my-2 border-2 hover:opacity-75 cursor-pointer flex flex-col items-center justify-center">
        {loading ? (
          // Show Skeleton while loading
          <>
            <Skeleton.Image style={{ width: 200, height: 200 }} />
            <div className="p-3 w-full">
              <Skeleton active title={false} paragraph={{ rows: 1 }} />
              <Skeleton active title={false} paragraph={{ rows: 1 }} />
            </div>
          </>
        ) : (
          // Show product details when not loading
          <>
            <Link to={`/product/${id}`}>
            {isAdded && (
            <ShoppingCartOutlined className="text-3xl absolute top-5 right-5" />
          )}
              <Image preview={false} src={thumbnail} height={200} />
              <div className="flex justify-between p-3 w-full">
                <h1 className="font-semibold">{title}</h1>
                <h1 className="font-semibold">${price}</h1>
              </div>
            </Link>
          </>
        )}
      </div>
    </Col>
  );
};

export default ProductCard;
