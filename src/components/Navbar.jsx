import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Popover } from 'antd';
import { AiFillDelete } from "react-icons/ai";
import logo from '/images/logo.svg'
import avatar from '/images/image-avatar.png'
// const { SolidButton } = require('./Button');

export default function Navbar({count, cart}) {
  const text = <span> <b>Cart</b> </span>;
  console.log('cart', cart[0].name)
  const {  name, discount_price } = cart[0];

  const content = (
    <div>
      <div className="flex items-center justify-between">
      <img className="rounded-md mr-2" src="/images/image-product-1-thumbnail.jpg" width={40} height={40} />
      <ul>
        <li className="text-sm">{`${name.substring(0,12)}...`}</li>
        <li> ${discount_price} x {count} <span> <b>{discount_price*count} </b></span> </li>
      </ul>
      <AiFillDelete className="text-red-500 text-xl"/>
      </div>
      <button className='bg-orange-500 hover:bg-orange-400 text-white shadow py-2 px-4 mt-3 rounded-lg justify-center w-full w-full'>Checkout</button>

    </div>
  );
  return (
    <header className="flex justify-between items-center py-3 border-b-2">
    <div className="flex items-center justify-start gap-4">
      <img src={logo} alt="logo" />
      <nav className="flex hidden items-center justify-start gap-4">
        <a href="/">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>

      <div className="flex items-center">
        <Popover placement="bottom" title={text} content={content} trigger="click">
          <Badge count={count} showZero>
          <AiOutlineShoppingCart size={25} className="mx-2"/>
          </Badge>
        </Popover>
        <img src={avatar} alt="avatar-profile" className="w-12"  />
      </div>
    </header>
  );
}