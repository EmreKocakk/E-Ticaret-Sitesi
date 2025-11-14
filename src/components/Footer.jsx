import React from 'react'
import '../css/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <div className='footer-wrap'>
            <div className='footer'>
                <div className='footer-icons'>
                    <FaInstagram className='FaInstagram' />
                    <BsTwitterX className='BsTwitterX'/>
                    <FaFacebook className='FaFacebook'/>
                    <FaYoutube className='FaYoutube'/>
                </div>
                <div>
                    <p>© {new Date().getFullYear()} Developed with by Emre Koçak. </p>
                </div>
            </div>
        </div>
    )
}

export default Footer