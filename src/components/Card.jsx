import { Image } from 'antd';


export default function Card({image}){
    return(
        <Image
        width={450}
        src={image}
        className='rounded-lg'
      />
    )
}