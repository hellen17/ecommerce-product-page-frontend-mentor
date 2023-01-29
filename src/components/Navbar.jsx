import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Popover } from 'antd';
import { AiFillDelete } from "react-icons/ai";
import logo from '/images/logo.svg'
import avatar from '/images/image-avatar.png'

export default function Navbar({count}) {
  const text = <span> <b>Cart</b> </span>;
  const content = (
    <div className="flex items-center justify-between">
      <img className="rounded-md mr-2" src="/images/image-product-1-thumbnail.jpg" width={40} height={40} />
      <p>Content</p>
      <AiFillDelete className="text-red-500 text-xl"/>
    
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