import { Data } from "./TestimonialData"

const Teams = () => {
  return (
    <div className="md:w-[70%] px-4 pt-16 mx-auto">
        <div className="md:w-[70%] md:mx-auto">
            <h2 className='text-4xl font-bold text-[#d9e3ea] text-center'> Keep projects on schedule </h2>
            <p className='text-lg md:text-xl font-normal text-gray-400 text-center py-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
            {
                Data.map((item, index) => {
                    const {pic, text, name} = item;
                    return(
                        <div key={index} className="bg-[#25282c] p-6 rounded" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                            <div>
                                <img src={pic} alt="testimonial" className="rounded-full w-14" />
                                <p className="text-gray-400 text-lg my-2"> {text} </p>
                            </div>
                            <div className="bg-gray-600 h-[1px] my-4"></div>
                            <div className="flex gap-4">
                                <p className="text-[#d9e3ea] text-lg"> {name} </p>
                                <button className="text-[#00df9a] text-lg">Ux Board</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Teams