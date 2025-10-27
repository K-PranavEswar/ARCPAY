import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card'; // Corrected path
import Button from '../components/Button'; // Corrected path
import { Sparkles, DollarSign, Zap } from 'lucide-react';
function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-tight mb-4 animate-fade-in">
            Meet ArcPay, Your AI Wallet Guardian
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in delay-200">
            Intelligent financial automation with AI agents on Arc and USDC.
            Take control of your digital finances.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in delay-400">
          <Card className="hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <Card.Body>
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-600 bg-opacity-20 rounded-full mb-4 ring-2 ring-cyan-500">
                <Sparkles className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">AI-Powered Decisions</h3>
              <p className="text-gray-400">
                ArcPay intelligently evaluates every payment against your custom rules.
              </p>
            </Card.Body>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <Card.Body>
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 bg-opacity-20 rounded-full mb-4 ring-2 ring-purple-500">
                <DollarSign className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">USDC-Native Payments</h3>
              <p className="text-gray-400">
                Seamless and stable transactions using USDC for all your automated payments.
              </p>
            </Card.Body>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <Card.Body>
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 bg-opacity-20 rounded-full mb-4 ring-2 ring-green-500">
                <Zap className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">On-Chain Automation</h3>
              <p className="text-gray-400">
                Leveraging the Arc blockchain for efficient, transparent, and secure automation.
              </p>
            </Card.Body>
          </Card>
        </section>

        <section className="text-center mb-12 animate-fade-in delay-600">
          <h2 className="text-4xl font-bold text-white mb-6">Explore ArcPay's Capabilities</h2>
          <div className="flex justify-center gap-4">
            <Button 
              variant="primary" 
              className="px-8 py-3 text-lg"
              as={Link}
              to="/signup"
            >
              Get Started
            </Button>
            <Button 
              variant="secondary" 
              className="px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

