import React from 'react';

const Home = () => {
  return (
    <section className="px-2 py-32 bg-white md:px-0">
      <div className="container flex flex-col lg:flex-row items-center justify-between max-w-6xl px-8 mx-auto space-x-0 lg:space-x-4 xl:px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between sm:-mx-3">
          <div className="w-full lg:w-7/10 md:px-3 p-4">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Welcome to <span className='text-indigo-600'>Saanjh</span></span>
                <span className="block text-indigo-600 xl:inline">Health Tracking & Prediction</span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Our application helps in tracking health records and predicting disease risks, ensuring a healthier and happier life for the elderly.
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="#"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  Try It Now!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="/login"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <div className="w-full  p-4">
            <div className="w-100 h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <video
                src="https://videos.pexels.com/video-files/5486056/5486056-sd_640_338_25fps.mp4"
                alt="Example"
                className="object-cover w-full h-full"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
