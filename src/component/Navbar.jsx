import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div 
       className="flex h-14 gap-x-4 items-center justify-center border-b-[1px] border-b-richblack-700 "
       > 

        <Link to='/'>
           <button
             className="rounded-[8px] border border-richblack-700 bg-richblack-900 px-[12px] py-[8px] text-richblack-100"
            >
              Home
           </button> 
        </Link>
       
        <Link to="/showplaylist">
          <button
           className="rounded-[8px] border border-richblack-700 bg-richblack-900 px-[12px] py-[8px] text-richblack-100"
           > 
            Show playlist 
          </button> 
        </Link>

         <Link to='/login'>
         <button className="rounded-[8px] border border-richblack-700 bg-richblack-900 px-[12px] py-[8px] text-richblack-100">
                Log IN 
         </button> 
         </Link>

         <Link to='/signup'>
            <button className="rounded-[8px] border border-richblack-700 bg-richblack-900 px-[12px] py-[8px] text-richblack-100">
               Sign UP
         </button>

         </Link>
          

        

      </div>
    </>
  )
}

export default Navbar