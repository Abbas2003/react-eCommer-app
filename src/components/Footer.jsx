import { FacebookOutlined, InstagramOutlined, GithubOutlined, YoutubeOutlined } from '@ant-design/icons'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-100 mt-10'>
            <div className='flex justify-between items-center container mx-auto p-3'>
                <h1><span>©</span>All Rights Reserved.</h1>
                <div className='flex gap-3 items-center'>
                    <a href="" target="_blank"><FacebookOutlined className="text-gray-700 hover:text-blue-600 transition duration-500" style={{ fontSize: 30 }} /></a>
                    <a href="" target="_blank"><InstagramOutlined className="text-gray-700 hover:text-pink-500 transition duration-500" style={{ fontSize: 30 }} /></a>
                    <a href="" target="_blank"><GithubOutlined className="text-gray-700 hover:text-gray-900 transition duration-500" style={{ fontSize: 30 }} /></a>
                    <a href="" target="_blank"><YoutubeOutlined className="text-gray-700 hover:text-red-600 transition duration-500" style={{ fontSize: 30 }} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer       