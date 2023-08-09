import { BsCheck2 } from 'react-icons/bs';
import feature2 from '../assets/feature2.png'

const GoalsComponent = () => {
  return (
    <>
        <div className= 'md:flex md:flex-row-reverse gap-2 md:gap-12 py-2 md:pt-12' >
            <div className='pt-6' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000">
                <div>
                    <p className='text-[#00df9a] italic text-lg'> More speed. Less spend </p>
                    <h2 className='py-2 text-xl md:text-4xl font-bold text-[#d9e3ea]'> Keep projects on schedule </h2>
                    <p className='text-lg font-normal mt-2 text-gray-400'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className='py-6'>
                    <div className='flex items-center text-lg'>
                        <BsCheck2 className='text-[#00df9a]'/>
                        <p className='ml-1 text-gray-400'>Duis aute irure dolor in reprehenderit</p>
                    </div>
                    <div className='flex items-center'>
                        <BsCheck2 className='text-[#00df9a]' />
                        <p className='ml-1 py-1 text-gray-400'> Duis aute irure dolor in reprehenderit </p>
                    </div>
                    <div className='flex items-center'>
                        <BsCheck2 className='text-[#00df9a]' />
                        <p className='ml-1 py-1 text-gray-400'> Duis aute irure dolor in reprehenderit</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000">
                <img src={feature2} alt="feature" />
            </div>
        </div>
    </>
  )
}

export default GoalsComponent