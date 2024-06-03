import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"



const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      })
    
    
    
      const {username, email ,password , confirmpassword } = formData
    
      // Handle input fields, when some value changes
      const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }
    
      // Handle Form Submission
      const handleOnSubmit = async (e) => {

        try {
            e.preventDefault()
    
       

            const {username, email , password , confirmpassword} =formData
            
            const signupdata = await axios.post('http://localhost:4000/api/v1/auth/signup' ,
                {
                    username,
                    email,
                    password,
                    confirmpassword
                }
            )
    
            console.log(signupdata)
            toast.success('signup sucessful')
        } catch (error) {
             toast.error('signup failed')
        }
       
      }
    
  return (
    

     <div className="justify-center items-center mt-[20px] ml-[20%]">
      
      
      {/* Form */}
      <div>
      <form onSubmit={handleOnSubmit} className="flex w-[50%] flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Username 
            </p>
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full"
            />
          </label>
         
        </div>
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
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password 
            </p>
            <input
              required
              type='text'
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full !pr-10"
            />
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password 
            </p>
            <input
              required
              type= 'password'
              name="confirmpassword"
              value={confirmpassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full !pr-10"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
      </div>
    </div>
    





   
  )
}

export default Signup