import React, { useEffect, useState } from "react";
import { getUser } from "@telegram-apps/sdk";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const telegramUser = getUser();
    setUser(telegramUser);
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Привет, {user.first_name}!</h1>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <p>Загрузка данных пользователя...</p>
      )}
    </div>
  );
}

export default App;
