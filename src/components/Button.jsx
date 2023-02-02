const buttons = {
    SolidButton: function SolidButton({children}){
      return(
          <button className='flex items-center bg-orange-500 hover:bg-orange-400 text-white shadow py-2 lg:py-0 px-4 mt-3 lg:mt-0 rounded-lg justify-center w-full lg:w-1/2'>{children}</button>
      )
    },
    OutlineButton: function OutlineButton({children}){
      return(
          <button className='flex items-center bg-gray-200 hover:bg-orange-100 text-orange-500 py-2 rounded-lg justify-evenly mr-3 w-full lg:w-1/2'>{children}</button>
      )
    }
  }
  export default buttons;