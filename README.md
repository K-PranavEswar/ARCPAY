````markdown
💳 ArcPay — AI Wallet Guardian

ArcPay is a next-generation AI Wallet Guardian that intelligently automates personal finances.  
It features AI-driven rule evaluation, on-chain USDC transactions via the Arc blockchain, and voice interactions powered by ElevenLabs.

Built for the "AI Agents on Arc with USDC" Hackathon (Oct 27 – Nov 9, 2025) — organized by Lablab.ai, Circle, Arc, and ElevenLabs.

---

🚀 Key Features

- 🎨 Modern Dashboard UI — Visualize finances, manage rules, and monitor AI agent activity.  
- 🧠 AI Agent Interaction — (Simulated/Backend-driven) Demonstrates how agents like Arcpay evaluate payment requests based on user-defined rules.  
- 🔗 On-Chain Integration — (Backend-driven) Supports secure, gasless USDC payments on the Arc blockchain via the Circle API.  
- 🔊 Voice Feedback — (Backend-driven) Integrates ElevenLabs for voice alerts and potentially voice command processing.  
- 🔐 User Authentication — Includes modern login and signup flows.

---

🛠️ Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 💨 Tailwind CSS
- 🧭 React Router DOM
- 🧩 Lucide React Icons

### Backend (separate project)
- 🟢 Node.js + Express
- 🗄️ MongoDB + Mongoose
- 🤖 LangChain.js (AI Logic)
- 💵 Circle API SDK (USDC handling)
- 🗣️ ElevenLabs API SDK (Voice feedback)

### Blockchain
- 🪙 Arc Blockchain  
- 💰 Stablecoin: USDC (via Circle API)

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd arcpay-frontend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Backend

Clone and configure the **arcpay-backend** project separately.
Ensure that the backend server is running, and the following environment variables are defined in the backend’s `.env` file:

```env
CIRCLE_API_KEY=<your-circle-api-key>
ELEVENLABS_API_KEY=<your-elevenlabs-api-key>
MONGO_URI=<your-mongodb-connection-uri>
PORT=5000
```

### 4️⃣ Run the Frontend

```bash
npm run dev
```

The app will start on:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧩 Project Structure

```
arcpay-frontend/
├── public/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── assets/                 # Images, icons, and media
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Dashboard.jsx       # Main financial dashboard
│   │   ├── AgentPanel.jsx      # AI Agent interface
│   │   ├── Transactions.jsx    # Payment history & activity
│   │   ├── Rules.jsx           # Manage user financial rules
│   │   ├── VoiceAlert.jsx      # ElevenLabs integration (voice)
│   │   ├── Login.jsx           # User login form
│   │   └── Signup.jsx          # User signup form
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Settings.jsx
│   │   └── Profile.jsx
│   │
│   ├── styles/
│   │   └── globals.css         # Tailwind base + custom styles
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx              # Handles React Router routes
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 🧠 How It Works (Concept)

1. **User defines rules** in the dashboard (e.g., “Auto pay electricity bill under $100”).
2. **AI Agent Finley** (simulated in backend) monitors incoming requests or transactions.
3. **Finley evaluates** each request using LangChain-based logic and user rules.
4. If approved:

   * A **USDC payment** is triggered securely through **Circle API** on the **Arc blockchain**.
   * A **voice confirmation** is generated using ElevenLabs.
5. All transactions are visible in the **dashboard** and **activity history**.

---

## 🧠 Future Enhancements

* ✅ Real AI-based transaction approvals with LangChain memory
* ✅ Live blockchain status updates from Arc
* ✅ Bi-directional voice interaction using ElevenLabs API
* ✅ Integrated notification center (email + push)
* ✅ Smart spending analytics dashboard

---

## 🧰 Development Notes

### **React + Vite Template Info**

This project is built with the official [Vite + React](https://vitejs.dev) template, featuring:

* Fast Hot Module Reload (HMR)
* ESLint integration
* Optional SWC or Babel compiler options

### **Available Plugins**

* [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — Uses **Babel** for Fast Refresh
* [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — Uses **SWC** for Fast Refresh

### **ESLint Configuration**

For production applications, we recommend using **TypeScript** with **type-aware lint rules**.
See [Vite React TS Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for setup instructions.

---

## 🏆 Hackathon Information

**Event:** AI Agents on Arc with USDC — *by Lablab.ai, Circle, Arc, and ElevenLabs*
**Duration:** Oct 27 – Nov 9, 2025
**Category:** AI + Blockchain + FinTech
**Project Name:** ArcPay
**Team Role:** Frontend Developer / AI Agent Integrator

---

## 🧾 License

**MIT License** © 2025 — *ArcPay Team*

---

## 🙌 Acknowledgments

* 🧠 [Lablab.ai](https://lablab.ai) for organizing the hackathon
* 💵 [Circle](https://www.circle.com) for the USDC API
* 🔗 [Arc Blockchain](https://arcblock.io) for blockchain integration
* 🗣️ [ElevenLabs](https://elevenlabs.io) for AI voice capabilities
* ⚙️ [Vite](https://vitejs.dev) & [React](https://react.dev) for powering the frontend
