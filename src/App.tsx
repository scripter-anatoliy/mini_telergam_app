import React from "react";
import { useTelegramLaunchParams } from "./useTelegramLaunchParams";

const App = () => {
  const params = useTelegramLaunchParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Telegram Mini App</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

export default App;
