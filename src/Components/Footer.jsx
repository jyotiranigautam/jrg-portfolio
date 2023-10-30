import React from 'react'
import {FaRegCopyright} from 'react-icons/fa6'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <footer className='container'>
        <hr />
        <div className="footer">
            <div className="copyright">
                <FaRegCopyright style={{color:'white'}}/> {' '}
                2023 <a href="#">Jyoti Rani Gautam</a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
