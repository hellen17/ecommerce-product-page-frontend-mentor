import { Image } from 'antd';
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Card({image, products}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isDesktop, setIsDesktop] = useState(false)

    console.log('isDesktop', isDesktop)

    useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth > 768)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
     
    }, [])
    
    const nextSlide = () => {
      if (currentIndex === products.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }

    }
    const previousSlide = () => {
      if (currentIndex === 0) {
        setCurrentIndex(products.length - 1)
      } else {
        setCurrentIndex(currentIndex - 1)
      }
    } 

    console.log('products', products);
    const mainImage = products[currentIndex].mainImage
    console.log('mainImage', mainImage)



    return(
      <div className='relative'>
       <img className='lg:rounded-lg w-full image' src={ isDesktop ? image : mainImage } alt="product images" />
        
      <ul className='lg:hidden'>
      <li onClick={previousSlide} className='absolute rounded-full bg-slate-100 p-3 left-4 top-1/2'> <FaChevronLeft/> </li>
      <li onClick={nextSlide} className='absolute rounded-full bg-slate-100 p-3  right-4 top-1/2'> <FaChevronRight/> </li>
      </ul>
      </div>

    )
}