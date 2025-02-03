import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div>
    <div className=' bg-slate-700 text-white py-8 px-4'>
        <div className='footer-group flex flex-col md:flex-row justify-between text-center space-y-8 md:space-y-0'>
          {/* Location Section */}
          <div className='md:w-1/3'>
            <h2 className='text-2xl font-bold mb-4'>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* Social Icons Section */}
          <div className='md:w-1/3'>
            <h2 className='text-2xl font-bold mb-4'>AROUND THE WEB</h2>
            <div className="footer-icons flex justify-center space-x-4">
              <i className="fa-brands fa-facebook text-2xl "></i>
              <i className="fa-brands fa-twitter text-2xl "></i>
              <i className="fa-brands fa-linkedin text-2xl "></i>
              <i className="fa-solid fa-globe text-2xl "></i>
            </div>
          </div>

          {/* About Section */}
          <div className='md:w-1/3'>
            <h2 className='text-2xl font-bold mb-4'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      
    </div>
    <div className='text-center p-3 bg-slate-900 text-white'>
          <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  );
}