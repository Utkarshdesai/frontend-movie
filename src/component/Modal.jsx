import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Modal = ({movie}) => {

    const {Title,Runtime,Director,Genre ,Poster } = movie
    
    const [modal ,setmodal] = useState([])
    const [selectedPlaylists, setSelectedPlaylists] = useState([]);
    const [Id ,setid] =useState('')


    // added to playlist
    const handleAddToPlaylist = async (e) => {
       
           try {
            e.preventDefault();
            console.log('hii')
            const added = await axios.post('http://localhost:4000/api/v1/playlist/addtoplaylist',
             {
                Title,
                Genre,
                Director,
                Poster,
                Runtime,
                selectedPlaylists ,
                Id                   
             }
            )

            console.log(added)
            toast.success('movie is added to playlist')

           } catch (error) {
             toast.error('playlist is not added')
           }
                                          
            
    }

    const handlelistchange = (e,id) => {
        setSelectedPlaylists(e.target.value)
        setid(id)
    }
  

    useEffect(()=> {
       
        // get all playlist
        const getplaylist = async() => {
          const response = await axios.get('http://localhost:4000/api/v1/playlist/showallplaylist')
          
          setmodal(response.data.data)
        }

        getplaylist() 
    } ,[])

  console.log(modal)
    
  return (
    <div className="flex justify-center items-center w-full h-[300px] mt-4"> 
       {modal.length > 0 && (
        <form onSubmit={handleAddToPlaylist}>
        <h3 className="text-xl font-semibold text-white mb-4">Select Playlists</h3>
          {modal.map((item) => (
            <div key={item._id}>
              <input
                type="checkbox"
                id={item._id}
                value={item.Playlistname}
                onChange={(e) => handlelistchange(e , item._id)}
                className="mr-2 w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label 
              className="text-[1.25rem] leading-[1.75rem] text-gray-300"
               htmlFor={item._id}>{item.Playlistname}
              </label>
             {console.log(item._id)}
            </div>
          ))}
          <button type="submit"
           className="mt-4  text-lg w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded"
          >Done</button>
        </form>
      )}
      
       
       
      

    </div>
  )
}

export default Modal