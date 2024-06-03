import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast";



const Playlist = () => {

    const token = localStorage.getItem('token');

    console.log(token)

    const [Playlistname ,setlistname] = useState('')
    const [PlaylistType ,setlisttype] = useState('')

    const handlesubmit = async (e) => {

        e.preventDefault();
        console.log(Playlistname )
        console.log(PlaylistType)
        try {

            const senddata = await axios.post('http://localhost:4000/api/v1/playlist/createplaylist' ,
            {
                PlaylistType,
                Playlistname,
                
            }
        )

        console.log(senddata)
        toast.success('new playlist is created')
            
        } catch (error) {
            console.error('Error creating playlist:', error);
            toast.error('new playlist is unable to create')
        }
      

    
    }
   
  return (
  <> 
 <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 py-10">
  <form onSubmit={handlesubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
    <div className="mb-6">
      <label htmlFor="list" className="block mb-2 text-lg font-medium text-gray-700">
        <p className="text-gray-700">Name of Playlist</p>
      </label>
      <input
        type="text"
        id="list"
        value={Playlistname}
        onChange={(e) => setlistname(e.target.value)}
        placeholder="Enter list name"
        className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="type" className="block mb-2 text-lg font-medium text-gray-700">
        <p className="text-gray-700">List Type</p>
      </label>
      <select
        name="list"
        id="type"
        value={PlaylistType}
        onChange={(e) => setlisttype(e.target.value)}
        className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
    </div>

    <button
      type="submit"
      className="block w-full py-3 mt-6 text-lg font-medium text-white bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
    >
      Submit
    </button>
  </form>
</div>

  
  
  
  </>
   
  
  )
}

export default Playlist