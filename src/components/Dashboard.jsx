import React from 'react';
import Card from './Card.jsx'; // Assuming Card.jsx is in ./Card.jsx
import Button from './Button.jsx'; // Assuming Button.jsx is in ./Button.jsx
import { DollarSign, ArrowUp, ArrowDown, Activity } from 'lucide-react';

/**
 * Main Dashboard Component
 * This is the "home page" after logging in.
 */
function Dashboard() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <Card.Body>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-400">Total Balance</span>
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-white mt-2">12,345.67 <span className="text-lg text-gray-400">USDC</span></div>
            <div className="text-sm text-green-400 flex items-center mt-1">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>+15.2% vs last month</span>
            </div>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-400">Total Spent (30d)</span>
              <ArrowDown className="h-5 w-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-white mt-2">1,280.50 <span className="text-lg text-gray-400">USDC</span></div>
             <div className="text-sm text-gray-400 flex items-center mt-1">
              <span>Avg. $42.68/day</span>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-400">Transactions (30d)</span>
              <Activity className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="text-3xl font-bold text-white mt-2">431</div>
             <div className="text-sm text-green-400 flex items-center mt-1">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>+22 new services</span>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-400">Blocked Payments (30d)</span>
              <ArrowDown className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-white mt-2">14</div>
             <div className="text-sm text-gray-400 flex items-center mt-1">
              <span>Saved: $450.00 USDC</span>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Main Content Area (e.g., Charts, Recent Transactions) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <Card.Title>Transaction History</Card.Title>
          <Card.Body>
            <p className="text-gray-400">[Chart placeholder]</p>
            {/* You would put a chart component here */}
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>Recent Activity</Card.Title>
          <Card.Body>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">Payment to "ElevenLabs"</p>
                  <p className="text-sm text-gray-500">Today, 2:30 PM</p>
                </div>
                <span className="font-semibold text-red-400">-12.50 USDC</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">Payment DENIED</p>
                  <p className="text-sm text-gray-500">Today, 1:15 PM</p>
                </div>
                <span className="font-semibold text-yellow-400">(25.00 USDC)</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">Payment to "Smart Meter"</p>
                  <p className="text-sm text-gray-500">Yesterday, 8:00 AM</p>
                </div>
                <span className="font-semibold text-red-400">-5.75 USDC</span>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default Dashboard;

