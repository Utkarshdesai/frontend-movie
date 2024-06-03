import axios from "axios"
import { useEffect, useState } from "react"


const Showplaylist = () => {

    const [showallplaylist , setshowallplaylist] = useState([])

    const getallplaylist = async() => {
         const getdata = await axios.get('http://localhost:4000/api/v1/playlist/showallplaylist')
         console.log(getdata.data)
         setshowallplaylist(getdata.data.data)
    }

    console.log(showallplaylist)

    useEffect( () => {
         getallplaylist()
     },[])



  return (
   
 <div className=" gap-4">
  {showallplaylist.map((item) => (
    <div
      key={item.Playlistname}
      className="flex flex-col rounded-lg shadow-md p-4"
    >
      <p className="text-lg font-semibold mb-2">{item.Playlistname}</p>
      {item.movielist.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {item.movielist.map((list) => (
            <div key={list._id} className="flex flex-col items-center mb-4">
              <p className="text-md font-semibold">{list.Title}</p>
              <img
                src={list.Poster}
                alt={list.Title}
                className="mt-2 w-24 h-auto"
              />
              <p className="text-sm mt-2">{list.Director}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm">No movies added to this playlist yet.</p>
      )}
    </div>
  ))}
</div>


  
  
  )
}

export default Showplaylist