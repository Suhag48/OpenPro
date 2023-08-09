
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className="flex justify-center items-center py-16 md:py-24 px-4">
      <form action="#" className="flex flex-col gap-6 bg-slate-700 px-20 py-14 md:w-[70%] lg:w-[45%] w-full rounded-md" data-aos="fade-left"
     data-aos-duration="1000">
        <h1 className="text-[#d9e3ea] text-center text-3xl md:text-4xl font-semibold pb-8">Sign In</h1>
        <input type="email" placeholder="Mail" className="p-2 rounded bg-[#d9e3ea] border-none focus:outline-none" />
        <input type="password" placeholder="Password" className="p-2 mb-4 rounded bg-[#d9e3ea] border-none focus:outline-none" />
        <button className="text-xl text-[#d9e3ea] bg-[#5d5dff] md:w-32 w-full mx-auto py-2 rounded">Signin</button>
        <p className="text-[#d9e3ea] text-lg text-center">Not registerd? 
          <Link to="/signup" className="text-[#5d5dff] pl-2">Signup Here</Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn