import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children 
 * @param {function} props.onLogout 
 */
function MainLayout({ children, onLogout }) {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-950 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
