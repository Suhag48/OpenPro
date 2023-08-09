import VideoPlayer from "./VideoPlayer"

const Hero = () => {
  return (
    <>
        <div className=" pt-20 px-6 md:w-[70%] w-full md:mx-auto z-[-1]" data-aos="fade-up"
     data-aos-duration="1000">
            <div className="md:w-[75%] w-full mx-auto">
                <h1 className="text-center text-3xl md:text-5xl font-extrabold text-[#d9e3ea]">Landing Templates for startup</h1>
                <p className="text-center text-lg md:text-xl my-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam repellat laborum maiores eligendi nesciunt aperiam.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 pb-10 pt-4 w-1/2 mx-auto text-[#fafafa]">
                <button className="bg-[#5d5dff] py-3 md:px-8 font-semibold rounded text-center">Start Free Trial</button>
                <button className="bg-slate-700 py-3 font-semibold rounded md:px-8 text-center">Learn More</button>
            </div>
            <div className="flex justify-center">
                <VideoPlayer />
            </div>
        </div>
    </>
  )
}

export default Hero