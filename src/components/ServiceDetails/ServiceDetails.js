import React from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { servicId } = useParams();
    const [servicsDetails, setServicsDetails] = useState({});
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/Programming-Hero-Web-Course3/healthcare-related-website-Morshedkamalnahin/main/public/services.json?token=AUU5NLGWRZ2NVG74O27OPZ3BOBI3E`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // find single id on fake data\
                const signleData = data.find((item) => item.id == servicId)
                setServicsDetails(signleData)
            })
    }, [])
    const { img, name } = servicsDetails;


    return (
        <div>
            <Header></Header>

            <div className='container mx-auto d-flex justify-content-center align-items-center serviceDetails-container'>
                <div className='w-100'>
                    <img src={img} className='serviceDetails-img' alt="" />
                </div>
                <div className='w-100 detailsContainer-info'>
                    <h1>{name}</h1>
                    <p>In-network providers discount their services in order to access patients through vision-plan directories. Out-of-network providers set aside budgets to leverage various marketing channels. Whatever you’re doing to bring new patients into your practice or optical shop, it comes at a cost. The best marketing strategies for eye care providers bring those costs down over time.

                        That’s why some providers turn to content marketing to build their online presence. Creating content doesn’t require a capital investment—just time—and it’s an effective way to strengthen relationships with current and potential patients. When you publish content to engage website prospects, you’re generating interest at minimal cost while establishing yourself as a thought leader in your community.</p>
                    <button className='btn-appointment'>Appoinment Now <span><i class="far fa-arrow-alt-circle-right"></i></span></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
