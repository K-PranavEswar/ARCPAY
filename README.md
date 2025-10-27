ArcPay

This project has UI interface for ArcPay, featuring "ARCPAY," an AI wallet guardian designed to intelligently automate personal finances. It showcases the integration of AI agents, on-chain payments via the Arc blockchain using USDC, and voice interactions powered by ElevenLabs.

The frontend is built using React and Vite, styled with Tailwind CSS, and designed to interact with a Node.js/Express backend.

Built for the "AI Agents on Arc with USDC – by Lablab.ai, Circle, Arc, and ElevenLabs" Hackathon (Oct 27 – Nov 9, 2025).

Key Features

Modern Dashboard UI: Visualize finances, manage rules, and monitor agent activity.

AI Agent Interaction: (Simulated/Backend Driven) Demonstrates how an AI agent like Finley can evaluate payment requests against user-defined rules.

On-Chain Integration: (Backend Driven) Designed to trigger secure, gasless USDC payments on the Arc blockchain via the Circle API.

Voice Feedback: (Backend Driven) Integrates with ElevenLabs for voice alerts and potentially voice commands.

User Authentication: Includes basic Login and Signup flows.

Tech Stack

Frontend: React, Vite, Tailwind CSS, react-router-dom, lucide-react

Backend (Separate Project): Node.js, Express, MongoDB, Mongoose, LangChain.js, Circle API SDK, ElevenLabs API SDK

Blockchain: Arc

Stablecoin: USDC (via Circle API)

Getting Started

Clone the repository:

git clone <your-repo-url>
cd arcpay-frontend


Install dependencies:

npm install


Set up Backend:

Clone and set up the arcpay-backend project separately.

Ensure the backend server is running.

You will need API keys for Circle and ElevenLabs configured in the backend's .env file.

Run the development server:

npm run dev


The application will be available at http://localhost:5173 (or the port specified by Vite).

React + Vite Template Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh

@vitejs/plugin-react-swc uses SWC for Fast Refresh

Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.
