import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function Error() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
        <p className="text-xl text-gray-600 mt-4">404 page not found</p>
        <Link to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go Back
        </Link>
      </div>
      <Footer />
    </div>
  );
}