import { useState } from "react";
import "./App.css";
import { Analytics, track } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import WebApp from "@twa-dev/sdk";

console.log(WebApp.version);

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((count) => count + 1);
    track("count");
  };

  return (
    <>
      <div>
        <h1>Siantap Airdrop</h1>
        <div className="card">
          <button onClick={handleCount}>count is {count}</button>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
