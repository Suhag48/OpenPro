
const Newsletter = () => {
    return (
      <div className="my-16 mx-4 md:my-20 p-12 md:w-[70%] md:mx-auto bg-[#5d5dff] md:flex md:gap-4 items-center" data-aos="fade-up"
      data-aos-duration="2000">
          <div className="lg:w-[60vw] md:w-[55vw] lg:mr-4">
              <h1 className="text-3xl font-bold text-[#d9e3ea]"> Stay in the loop </h1>
              <p className="py-2 text-gray-100"> Join our newsletter to get top news before anyone else. </p>
          </div>
          
          <div className="lg:w-[40vw] md:w-[45vw]">
              <form className="lg:flex lg:gap-4 w-full md:flex md:flex-col md:gap-4 lg:flex-row">
                  <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md my-4 focus:border-none focus:outline-none text-gray-800 md:my-0 bg-[#d9e3ea]" />
  
                  <button className="text-base md:text-lg font-semibold py-2 lg:px-2 bg-[#d9e3ea] w-full text-center rounded-md text-gray-800 cursor-pointer transition-all ease-in-out duration-700 md:w-full">Subscribe</button>
              </form>
              
          </div>
      </div>
    )
  }
  
  export default Newsletter