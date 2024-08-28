import React from 'react';
import Appbar from '../components/Appbar';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';

export default function Home() {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/signup");
    }
  return (
    <div className="welcome-page min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
    <h1 className="text-5xl font-bold mb-4">Welcome to Paytm Clone</h1>
    <p className="text-lg mb-8 max-w-md text-center">
      Manage your payments and transactions easily with our simple and secure platform.
    </p>
    <button className="px-8 py-3 bg-black text-white border font-semibold rounded-md hover:bg-white hover:border-black hover:text-black transition duration-200" onClick={handleclick}>
      Get Started
    </button>
  </div>
  )
}
