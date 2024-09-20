import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Image } from 'antd'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Header = () => {

    const navigate = useNavigate()
    const isLoggedIn = true
    
    const { cartItems } = useContext(CartContext)
    // console.log("cart items ->", cartItems);
     
    return (
        <header className="text-gray-600 body-font border shadow">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link to={"/"}>
                    <Image
                        height={50}
                        width={50}
                        className="rounded-full"
                        preview={false}
                        src="https://media.istockphoto.com/id/1455412082/photo/mobile-phone-or-smartphone-with-cart-shopping-paper-bags-isolated-on-pink-background-online.jpg?s=612x612&w=0&k=20&c=y9nnUaWtjiRyL9npeLzttRlBIZ-e2HxP7fWBL9zeImE="
                    />
                </Link>
                <nav className="md:m-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={'/products'} className="mr-5 hover:text-gray-900">Products</Link>
                    <Link to={'/orders'} className="mr-5 hover:text-gray-900">Orders</Link>
                </nav>

            <div className='flex items-center gap-3'>
                {isLoggedIn ? (
                    <Avatar size={40} icon={<UserOutlined />} />
                ): (
                    <Button onClick={() => navigate('/auth')}>Login</Button>
                )}
                <Link to={'/carts'}>
                    <Badge count={cartItems.length}>
                        <ShoppingCartOutlined
                            style={{
                                fontSize: 30,
                                color: 'blue',
                            }}
                        />
                    </Badge>
                </Link>
            </div>

            </div>
        </header>

    )
}

export default Header       