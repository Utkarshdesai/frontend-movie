import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"


const Login = () => {
  
   
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    })
   
 

   const { email, password } = formData

    const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
    }

  const handleOnSubmit = async (e) => {
    try {

     e.preventDefault()
    const {email ,password} = formData 

    const logindata = await axios.post('http://localhost:4000/api/v1/auth/login',
    {
        email,
        password
    })

    console.log(logindata.token)
    toast.success('login sucessful')

    formData('')
   
   
        
    } catch (error) {
      console.log(error)
      toast.error('login failed')
    }
   
    
  }

  
 
   

  return (
 <div className="flex justify-center items-center">

  <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-[50%] flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address 
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="form-style w-full"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password 
        </p>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="form-style w-full !pr-10"
        />
        
      
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>
    </div>
  )
}

export default Login