import axios from 'axios'
import { useState } from 'react'
import {  Link,  } from 'react-router-dom'
import Moviecard from '../component/Moviecard'

const Home = () => {
 
  const [query , setquery] = useState('')
  const [movie ,setmovie] =useState([])


  const handleinput = (e) => {     
    setquery(e.target.value)
  }

 
 console.log(movie)
 
  
  const handlesearch = async () => 
    {
        try {

            const response = await axios.get('http://www.omdbapi.com', {
            params: {
            t: query,
            apikey: '8801815c',
            },
          
        })

        if(response.data.Response === 'True')
            {
                setmovie(response.data)
              
            }
         
         else 
            {
                setmovie(null); // Clear movie data
           
            }
         
           
            setquery('')

        } catch (error) {
            console.error('Error fetching data from OMDb API:', error);
        }
    }
   


  return (
    <div className="mt-10 flex flex-col items-center ">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto">
      <div className="flex gap-x-3 items-center w-full">
        <input
          type="text"
          onChange={handleinput}
          value={query}
          placeholder="Enter movie name"
          className="p-3 border border-gray-300 rounded-lg w-full text-lg"
        />
        <button
          onClick={handlesearch}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <Link to="/Playlist">
        <button className="mt-6 md:mt-0 px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg hover:bg-yellow-600">
          Playlist +
        </button>
      </Link>
    </div>
  
    <div className="flex justify-center items-center mt-10 w-full">
      {movie === null ? (
        <div className="flex justify-center items-center mt-10">
          <div>Movie not found</div>
        </div>
      ) : (
        <Moviecard movie={movie} />
      )}
    </div>
  </div>
  
    
  )
}

export default Home