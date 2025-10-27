import React from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowLeftRight, 
  Settings, 
  ShieldCheck, 
  LogOut, 
  Bell 
} from 'lucide-react';

// A single navigation item component
const NavItem = ({ icon: Icon, label, active, alert }) => (
  <a
    href="#"
    className={`
      flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
      ${active
        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
        : 'text-brand-text-dim hover:bg-brand-dark-card hover:text-brand-text-light'
      }
    `}
  >
    <Icon className="w-5 h-5 mr-3" />
    <span className="flex-1">{label}</span>
    {alert && <span className="w-2 h-2 bg-brand-red rounded-full"></span>}
  </a>
);

/**
 * Sidebar
 * The main navigation component for the dashboard.
 * Sits on the left side and contains links to all major pages.
 */
function Sidebar() {
  return (
    <div className="w-64 bg-brand-dark-card border-r border-brand-dark-border flex flex-col p-6">
      {/* Logo/Brand */}
      <a href="/" className="flex items-center space-x-2 text-white text-2xl font-bold mb-10 px-2">
        <ShieldCheck className="text-cyan-400" size={30} />
        <span>ArcPay</span>
      </a>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        <NavItem icon={LayoutDashboard} label="Dashboard" active />
        <NavItem icon={Wallet} label="My Wallets" />
        <NavItem icon={ArrowLeftRight} label="Transactions" />
        <NavItem icon={Bell} label="Notifications" alert />
        <NavItem icon={Settings} label="Settings" />
      </nav>
      <div className="mt-auto">
        <NavItem icon={LogOut} label="Logout" />
      </div>
    </div>
  );
}

export default Sidebar;

