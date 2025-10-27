import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from '../components/Navbar.jsx'; 
import Footer from '../components/Footer.jsx'; 

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;

