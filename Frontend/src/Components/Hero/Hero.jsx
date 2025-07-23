import React from 'react';

const Hero = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row" id='form'
      // style={{
      //   backgroundImage: 'url(/assets/bg2.jpg)',
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat"
      // }}
    >
      {/* Left section: visible only on md and up */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center items-end justify-end">
      <img src="/assets/logo.png" alt="Chirrp" className='object-cover absolute top-10 left-4 h-22 w-44' />
        {/* <div className="bg-opa p-10 rounded-lg text-blue-600 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Get direct access to exclusive offers, discounts , and unique deals from the City&apos;s most premium spots — all in one place. Enjoy savings on fine dining, luxury salons, spas, gyms, bars, clubs, and more .
          </h2>
          <ul className="mt-6 text-sm flex flex-wrap items-center gap-5">
            <li className='flex gap-2 items-center'>
              <img height={20} width={20} src="/assets/tick.svg" alt="" />No apps to download 
            </li>
            <li className='flex gap-2 items-center'>
              <img height={20} width={20} src="/assets/tick.svg" alt="" /> No clutter 
            </li>
            <li className='flex gap-2 items-center'>
              <img height={20} width={20} src="/assets/tick.svg" alt="" /> Just Exclusive deals
            </li>
          </ul>
        </div> */}
        <div>
          <img
            src="/assets/bg2.jpg"
            alt=""
            className="absolute top-0 left-0 w-screen h-screen object-cover object-center -z-10"
          />
        </div>
      </div>

      {/* Right section: form only, shown on all screen sizes */}
      <div className="w-full md:w-1/2  flex items-center justify-center md:justify-end p-6 bg-white md:bg-transparent h-screen md:h-auto">
        <div className="w-full max-w-md bg-white py-20 px-6 md:px-10 rounded-md shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 flex items-center justify-center">
              <img src="/assets/favicon.png" alt="Chirrp" className='object-cover' />
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-700">
              Welcome to <span className="text-gray-900">Chirrp</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-gray-800">Start receiving your privileges now.</h1>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="mt-4 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={()=>{window.location.href='https://wa.me/918019908855';}} className="mt-4 w-full bg-blue-600 text-white cursor-pointer font-medium py-3 rounded-lg hover:bg-blue-700 transition">
            Continue
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By continuing you agree to our <a href="/privacypolicy" className="text-blue-500 underline">privacy policy</a> and <a href="/termsandconditions" className="text-blue-500 underline">terms of use</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
