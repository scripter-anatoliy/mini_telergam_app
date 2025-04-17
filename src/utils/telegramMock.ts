import { mockTelegramEnv } from "@telegram-apps/sdk-react";

export const setupTelegramMock = () => {
  mockTelegramEnv({
    launchParams: new URLSearchParams([
      [
        "tgWebAppThemeParams",
        JSON.stringify({
          bg_color: "#17212b",
          text_color: "#ffffff",
          button_color: "#5288c1",
          button_text_color: "#ffffff",
        }),
      ],
      [
        "tgWebAppData",
        JSON.stringify({
          user: {
            id: 123456789,
            first_name: "Локальный",
            last_name: "Пользователь",
            username: "dev_user",
          },
          auth_date: Math.floor(Date.now() / 1000),
          hash: "mock_hash_value",
        }),
      ],
      ["tgWebAppVersion", "6.7"],
    ]),
  });
};
