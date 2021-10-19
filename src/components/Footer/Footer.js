import React from 'react'
import { Container } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='bg-info '>
            <Container className="row m-auto mt-5 ">
                <div className="col-lg-4 col-sm-10">

                    <h4 className=' mt-4 text-start'>Health care</h4>
                    <p className='footer-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos explicabo delectus dignissimos! Libero sint laboriosam incidunt voluptas at sunt beatae adipisci dolorem quibusdam quos? Doloribus ex laudantium beatae tenetur?</p>                </div>
                <div className="col-lg-4 col-sm-10">
                    <nav>
                        <h4 className=' text-start mt-4'>Information</h4>

                        <ul className='list-unstyled  footer-item'>

                            <li className='py-2'>HOME</li>
                            <li className='py-2'>ABOUT</li>
                            <li className='py-2'>SERVICE</li>
                            <li className='py-2'>BLOG</li>

                        </ul>
                    </nav>
                </div>
                <div className="col-lg-4 col-sm-10">
                    {/* contact us */}
                    <h4 className=' mt-4 text-start'>Address</h4>
                    <div className=' text-start mt-4 fs-5'>
                        <p><span><i class="fas fa-phone-alt"></i></span> <span className='ms-1'>+8801840225535</span></p>
                        <p><span><i class="fas fa-envelope"></i></span> <span className='ms-1'>mknahin2000@gmail.com</span></p>
                        <p><span><i class="fas fa-map-marker-alt"></i></span> <span className='ms-1'>Ramu,Cox's Bazar, BD</span></p>
                    </div>
                </div>
            </Container>
            <div className='bg-dark   py-2 '>
                <Container>                <p className='text-center text-light'>&copy;all right nahin</p>
                </Container>
            </div>
        </div>
    )
}

export default Footer
