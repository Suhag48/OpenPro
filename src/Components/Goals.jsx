import GoalsComponent1 from './GoalsComponent1';
import GoalsComponent2 from './GoalsComponent2';
import GoalsComponent3 from './GoalsComponent3';

const Goals = () => {
  return (
    <>
        <div className="md:w-[70%] w-full mx-auto px-4 md:px-16">
            <div className="text-center w-full mx-auto" data-aos="zoom-in" data-aos-duration="1000">
                <div className="md:w-1/4 w-1/2 mx-auto mb-4">
                    <p className="text-[#fafafa] bg-[#5d5dff] mb-8 py-1 rounded font-semibold">Reach goals that matter</p>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#d9e3ea]">One product, unlimited solutions</h1>
                <p className="text-lg md:text-xl my-6 text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
            </div>
            <div>
                <GoalsComponent1 />
                <GoalsComponent2 />
                <GoalsComponent3 />
            </div>
        </div>
        <div className="bg-gray-600 mt-16 h-[1px] md:w-2/3 w-[98%] mx-auto "></div>
    </>
  )
}

export default Goals