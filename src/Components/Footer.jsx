import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
        <footer className='text-gray-400 grid grid-cols-2 md:grid-cols-4 lg:gap-12 md:gap-8 gap-6 pb-16 px-4 md:w-[70%] md:mx-auto md:px-0'>
            <div>
                <a href="/">
                    <img src={logo} alt="logo" className='w-10 auto' />
                </a>
                <p className='pt-2 leading-7'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-[#d9e3ea] font-semibold pb-2'>Products</h3>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>web Studio</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>DynamicBox Flex</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Programming Forms</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>DynamicBox Flex</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Programming Forms</a>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-[#d9e3ea] font-semibold pb-2'>Resources</h3>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Nostrud exercitation</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Visual mockups</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Nostrud exercitation</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Visual mockups</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Nostrud exercitation</a>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-[#d9e3ea] font-semibold pb-2'>Company</h3>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Consectetur adipiscing</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Labore et dolore</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Consectetur adipiscing</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Labore et dolore</a>
                <a href='#' className='leading-7 hover:text-[#d9e3ea]'>Consectetur adipiscing</a>
            </div>
        </footer>
    </>
  )
}

export default Footer