# 💳 ArcPay — AI Wallet Guardian

ArcPay is a next-generation **AI Wallet Guardian** that intelligently automates personal finances.  
It features AI-driven rule evaluation, on-chain USDC transactions via the **Arc blockchain**, and **voice interactions** powered by **ElevenLabs**.

Built for the **"AI Agents on Arc with USDC" Hackathon (Oct 27 – Nov 9, 2025)** — organized by **Lablab.ai, Circle, Arc, and ElevenLabs**.

---

## 🚀 Key Features

- 🎨 **Modern Dashboard UI** — Visualize finances, manage rules, and monitor AI agent activity.  
- 🧠 **AI Agent Interaction** — Simulated/Backend-driven logic showcasing how agents (like *Finley*) evaluate payment requests.  
- 🔗 **On-Chain Integration** — Secure, gasless USDC payments on the **Arc blockchain** via the **Circle API**.  
- 🔊 **Voice Feedback** — Uses **ElevenLabs API** for real-time voice alerts and future voice command integration.  
- 🔐 **User Authentication** — Includes login and signup flows with clean UI.

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React (with Vite)
- 💨 Tailwind CSS
- 🧭 React Router DOM
- 🔔 Lucide React Icons

### **Backend** (separate project)
- 🟢 Node.js + Express
- 🗄️ MongoDB + Mongoose
- 🤖 LangChain.js (AI Logic)
- 💵 Circle API SDK (for USDC)
- 🗣️ ElevenLabs API SDK (for voice)

### **Blockchain**
- 🪙 Arc  
- 💰 Stablecoin: **USDC (via Circle API)**

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd arcpay-frontend
