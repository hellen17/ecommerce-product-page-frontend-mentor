import { useState } from 'react';
import Card from '../components/Card';
import buttons from '../components/Button';
const { SolidButton, OutlineButton } = buttons;
import Navbar from '../components/Navbar';
import { imagesData } from '../imagesData';
import { AiOutlineShoppingCart } from "react-icons/ai";
import minus from '/images/icon-minus.svg'
import plus from '/images/icon-plus.svg'

export default function Product(){

    const [images] = useState(imagesData);
    const [value, setValue] = useState(1);

    const {mainImage} = images[value];

    const [count, setCount] = useState(0);
    const [updateCount , setUpdateCount] = useState(0)

    console.log('f',images.length);

    const [cartItems, setCartItems] = useState(
        [
            {
                id: 1,
                name: 'Fall Limited Edition Sneakers',
                description : 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
                original_price: 250.00,
                discount_price : 125.00,
                image: '/images/image-product-1.jpg',
            }
        ]

    );

    const cartLength = cartItems.length; // gets the length of the Array
    console.log('cartLength', cartLength);

    // const { id, name, description, original_price, discount_price, image } = cartItems;



    function incrementCount(){
        setCount(count + 1)
    }

    function decrementCount(){
        setCount(count - 1)
        if (count <= 0){
            setCount(0)
        }
    }

    
    function removeItem(item){
        setCartItems(cartItems.filter((item) => item.id !== id))
    }
    function addItem(item, count){
        setCartItems([...cartItems, item])
        setUpdateCount(updateCount + count)
        console.log('updateCount', updateCount)
        alert('Item added to cart')
        
    }

    return(
        <>
        <Navbar cartLength={cartLength} />
        <div className='grid lg:grid-cols-2 gap-10 py-15'>
                
                <article className='lg:my-10'>
                    <Card image={mainImage} products={images} />
                    <ul className='hidden lg:flex gap-5 justify-start mt-5'>
                    {images.map((image, index) => (
                        <li key={image.id} onClick={() => setValue(index)} className={index === value && 'border-2 opacity-80 border-orange-500 rounded-xl cursor-pointer'}>
                            <img src={image.thumbnail} className="w-20 rounded-lg" /> 
                        </li>
                        ))}
                    </ul>
                </article>

                {cartItems.map((item) => (

                <div className='text-left lg:px-10 lg:pt-40 p-8'>
                    <h2 className='font-bold uppercase text-orange-300 tracking-wide'>SNEAKER COMPANY</h2>
                    <h1 className='text-3xl font-bold lg:leading-loose'>{item.name}</h1>
                    <p className='text-slate-500 my-5 leading-relaxed'>{item.description}</p>

                    <div className='flex lg:flex-col lg:justify-start justify-between'>
                        <p className='text-2xl font-bold'>${item.discount_price}<span className='ml-5 text-base text-orange-400 rounded-lg bg-orange-100 p-1 px-2'>{(item.original_price - item.discount_price) / item.original_price * 100}%</span></p>
                        <p className='text-slate-500 line-through mx-2'>${item.original_price}</p>
                    </div>

                    <div className='mt-5 flex flex-col lg:flex-row mb-4'>
                        <OutlineButton> 
                            <img src={minus} onClick={decrementCount} /> {count} <img src={plus} onClick={incrementCount} /> </OutlineButton>

                        <SolidButton onClick={() => addItem(item, count)} >
                        <AiOutlineShoppingCart style={{ display: 'inline',marginRight: 5}} />
                            Add to Cart
                        </SolidButton>
                    </div>
                        

                        

                </div>
                


            ))
            }
            
      

    
        </div>
        </>
    )
}