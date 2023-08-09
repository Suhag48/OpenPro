import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex justify-center items-center py-16 md:py-24 px-4">
      <form action="#" className="flex flex-col gap-6 bg-slate-700 px-20 py-14 md:w-[70%] lg:w-[45%] full rounded-md" data-aos="fade-right"
     data-aos-duration="1000">
        <h1 className="text-[#d9e3ea] text-center text-3xl md:text-4xl font-semibold pb-8 ">Sign Up</h1>

        <input type="text" name="name" placeholder="Name" className="p-2 rounded bg-[#d9e3ea] border-none focus:outline-none" />
        <input type="email" name="email" placeholder="Email" className="p-2 rounded bg-[#d9e3ea] border-none focus:outline-none" />
        <input type="password" name="password" placeholder="Password" className="p-2 rounded bg-[#d9e3ea] border-none focus:outline-none" />
        <input type="password" name="cpassword" placeholder="Confirm Password" className="p-2 rounded bg-[#d9e3ea] border-none focus:outline-none mb-4" />
        <button className="text-xl text-[#d9e3ea] bg-[#5d5dff] md:w-32 w-full mx-auto py-2 rounded">Join</button>

        <p className="text-[#d9e3ea] text-lg text-center">Already registerd? 
          <Link to="/signin" className="text-[#5d5dff] pl-2">Signin Here</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp