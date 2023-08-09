import { Data } from "./FeatureData"

const Feature = () => {
  return (
    <div>
        <div className="md:w-[70%] mx-auto py-16 md:py-24 px-4">
            <div>
                <h1 className="text-center text-3xl md:text-5xl font-bold text-[#d9e3ea]">The majority our coustomers do not understand their workflow.</h1>
                <p className="text-center text-lg md:text-xl py-6 text-gray-400 md:px-24">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <div className=' grid md:grid-cols-3 gap-12 md:gap-16 mx-auto pt-10'>
                    {
                        Data.map((items, index) => {
                        return(
                            <div key={index} className="px-28 md:px-12" data-aos="zoom-in-right" data-aos-duration="2000"> 
                                <div className='w-16 h-16 mb-3 bg-[#5d5dff] rounded-full flex justify-center items-center mx-auto text-[#fafafa]'>
                                    {items.icon}
                                </div>
                                <h1 className='py-2 text-center text-xl md:text-2xl font-bold text-[#d9e3ea]'> {items.heading} </h1>
                                <p className="text-center leading-6 text-lg text-gray-400"> {items.details} </p>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        </div>
        <div className="bg-gray-600 mb-16 md:mb-24 h-[1px] md:w-2/3 w-[98%] mx-auto "></div>
    </div>
  )
}

export default Feature