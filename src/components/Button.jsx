const buttons = {
    SolidButton: function SolidButton({children}){
      return(
          <button className='bg-orange-500 hover:bg-orange-600 text-white p-3 px-10 rounded-lg mr-2 justify-between'>{children}</button>
      )
    },
    OutlineButton: function OutlineButton({children}){
      return(
          <button className='bg-gray-200 hover:bg-orange-100 text-orange-500 p-3 px-20 rounded-lg mr-2 justify-between'>{children}</button>
      )
    }
  }
  export default buttons;