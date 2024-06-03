
import { useState } from "react"

import Modal from "./Modal"


const Moviecard = ({movie}) => {

    // const [modal ,setmodal] = useState()
     const [ismodal ,setismodal] = useState(false)

     const handlemodal = () => {
         setismodal(true)
     }


//     useEffect(()=> {
       
//         const getplaylist = async() => {
//           const response = await axios.get('http://localhost:4000/api/v1/playlist/showallplaylist')
//           setmodal(response.data.data)
//         }

//         getplaylist() 
//     } ,[])

//   console.log(modal)
    
  return (

    

    <> 
     
        {
            ismodal ?  
            
            <Modal movie = {movie} ></Modal> 
            
            : 
            <div className="flex justify-center items-center flex-col rounded-sm p-6 w-full max-w-md mx-auto">
            <div className="w-full flex justify-center mb-4">
              <img src={movie.Poster} alt={movie.Title} className="rounded-md shadow-lg" />
            </div>
          
            <h1 className="text-2xl font-inter font-bold text-center mb-2">  {movie.Title} </h1>
            <p className="text-xl font-inter font-medium text-center mb-2">  {movie.Runtime} </p>
            <p className="text-xl font-inter font-medium text-center mb-2">  {movie.Director} </p>
            <p className="text-xl font-inter font-medium text-center mb-4">  {movie.Genre} </p>
          
            {movie.Title && (
              <button
                onClick={handlemodal}
                className="mt-6 rounded-lg bg-yellow-400 py-3 px-8 font-medium text-richblack-900 hover:bg-yellow-500"
              >
                Add to playlist
              </button>
            )}
          </div>
          
            
        }

    </>
      
         

      
    
  )
}

export default Moviecard