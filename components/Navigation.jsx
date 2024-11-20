import React from 'react'
const Navigation = () => {
  return (
    <div className="mainNavigation">
        <ul className='text-center flex items-center justify-center gap-5'>
            <li>
                <a className='text-white text-sm' href="/sale">Sale</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/rent">Rent</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/off-plan">Off Plan</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/projects">Projects</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/communities">Communities</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/services">Services</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/blogs">Blog</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/about">About</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/careers">Careers</a>
            </li>
            <li>
                <a className='text-white text-sm' href="/contact-us">Contact us</a>
            </li>
        </ul>
    </div>
  )
}
export default Navigation